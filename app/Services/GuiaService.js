'use strict'

const Service = use('App/Services/Abstract/Service')
const ProfissionalService = use('App/Services/ProfissionalService')
const EstabelecimentoService = use('App/Services/EstabelecimentoService')
const utf8 = require('utf8');

const Guia = use('App/Models/Guia')
const Convenio = use('App/Models/Convenio')
const Profissional = use('App/Models/Profissional')
const Estabelecimento = use('App/Models/Estabelecimento')
const Lote = use('App/Models/Lote')

const fs = require('fs'),
    xml2js = require('xml2js');

const xlsx = use('node-xlsx')

class GuiaService extends Service {
    estabelecimentoService;
    profissionalService;

    constructor() {
        super(Guia);

        this.estabelecimentoService = new EstabelecimentoService()
        this.profissionalService = new ProfissionalService()
    }

    async _importGuia(objTISS, convenio, lote) {
      let convenioModel = await Convenio.query().where('nome', convenio).first()

      let profissional = new Profissional();
      profissional.nome = utf8.encode(objTISS['ans:profissionalExecutante'][0]['ans:nomeProfissional'][0].toUpperCase().trim())
      profissional.conselho_profissional = objTISS['ans:profissionalExecutante'][0]['ans:conselhoProfissional'][0];
      profissional.co_profissional = objTISS['ans:profissionalExecutante'][0]['ans:numeroConselhoProfissional'][0];
      profissional.UF = objTISS['ans:profissionalExecutante'][0]['ans:UF'][0];
      profissional.CBOS = objTISS['ans:profissionalExecutante'][0]['ans:CBOS'][0];

      let estabelecimento = new Estabelecimento()
      estabelecimento.nome = utf8.encode(objTISS['ans:contratadoExecutante'][0]['ans:nomeContratado'][0])
      estabelecimento.ativo = true

      let guia = new Guia()
      guia.nu_carteira = objTISS['ans:dadosBeneficiario'][0]['ans:numeroCarteira'][0];
      guia.convenios_id = convenioModel.toJSON().id;
      guia.estabelecimento_id = await this.estabelecimentoService.checkEstabelecimento(estabelecimento)
      guia.profissional_id = await this.profissionalService.checkProfissional(profissional)
      guia.dt_atendimento = objTISS['ans:dadosAtendimento'][0]['ans:dataAtendimento'][0];
      guia.no_paciente = utf8.encode(objTISS['ans:dadosBeneficiario'][0]['ans:nomeBeneficiario'][0])
      //guia.dt_validade = ;
      guia.tp_consulta = objTISS['ans:dadosAtendimento'][0]['ans:tipoConsulta'][0];
      //guia.tp_saida = ;
      guia.co_tabela = objTISS['ans:indicacaoAcidente'][0];
      guia.co_procedimento = objTISS['ans:dadosAtendimento'][0]['ans:procedimento'][0]['ans:codigoTabela'][0];
      guia.co_guia = objTISS['ans:numeroGuiaOperadora'][0];
      guia.lote_id = lote.id

      return guia.save()
    }

    async createLote(file, user, type) {
      return await Lote.findOrCreate(
        { usuario_id: user.id },
        { file: file },
        { type: type }
      )
    }

    async importSC(file, convenio, user, type) {
      var parser = new xml2js.Parser();
      const me = this
      let lote = await me.createLote(file, user, type)

      fs.readFile(file, function(err, data) {
        parser.parseString(data, function (err, result) {
            let guias = (result['ans:mensagemTISS']['ans:prestadorParaOperadora'][0]['ans:loteGuias'][0]['ans:guiasTISS'][0]['ans:guiaConsulta']);

            guias.forEach(item => {
              if (me._importGuia(item, convenio, lote)) {
              } else {
                console.log(error)
              }
            });
        });
      });
    }

    async __getGuia(coGuia, profissional) {
      profissional = (profissional).split(' - ')
      let guia = await Guia.findBy('co_guia', coGuia)

      if (!guia)
        return;

      await guia.load('profissional')
      return (guia)
    }

    __getNuCarteirinha(str) {
      var matches = str.match(/(\d+)/);
      return matches[0].trim()
    }

    __getNomePaciente(str) {
      return str.replace(/[0-9]/g, '').trim().toUpperCase();
    }

    __convertDataAtendimento(date) {
      let dateTmp = date.split('/')
      return dateTmp[2] + '-' + dateTmp[1] + '-' + dateTmp[0]
    }

    async __getExecutante(executante) {
      let strTmp = executante.split(' - ')
      let code = strTmp[0].trim()
      let nome = strTmp[1].trim()
      let result = { estabelecimento_id: null, profissional_id: null }

      if (code.includes("/")) {
        let estabelecimento = new Estabelecimento()
        estabelecimento.nome = utf8.encode(nome)
        estabelecimento.ativo = true

        result.estabelecimento_id = await this.estabelecimentoService.checkEstabelecimento(estabelecimento)
      } else {
        let profissional = new Profissional();
        profissional.nome = utf8.encode(nome)
        profissional.co_profissional = code;

        result.profissional_id = await this.profissionalService.checkProfissional(profissional)
      }

      return result
    }

    async lowerSC(file, convenio, user, type) {
      const workSheetsFromBuffer = xlsx.parse(fs.readFileSync(file))
      if (workSheetsFromBuffer.length > 0) {
        let data = workSheetsFromBuffer[0].data
        let me = this

        let lote = await me.createLote(file, user, type)
        data.forEach(async (item, index) => {
          if (index > 0) {
            let result = await me.__getGuia(item[2], item[1])
            if (result) {
              result.valor = item[13]
              result.lote_id = lote.id
              result.save()
            } else {
              let convenioModel = await Convenio.query().where('nome', convenio).first()
              let executante = await this.__getExecutante(item[1])

              let guia = new Guia()
              guia.nu_carteira = this.__getNuCarteirinha(item[3])
              guia.convenios_id = convenioModel.toJSON().id;
              guia.profissional_id = executante.profissional_id
              guia.estabelecimento_id = executante.estabelecimento_id
              guia.dt_atendimento = this.__convertDataAtendimento(item[4])
              guia.no_paciente = this.__getNomePaciente(item[3])
              guia.co_guia = item[2]
              guia.valor = item[13]
              guia.tp_consulta = null
              guia.valor_apresentado = item[10]
              guia.valor_executado = item[11]
              guia.valor_glosado = item[12]
              guia.lote_id = lote.id

              guia.save()
            }
          }
        })
      }
    }

    async executeFile(file, convenio, type, user) {
      switch(convenio) {
        case "SC":
          if (type == 1) await this.importSC(file, convenio, user, type)
          else await this.lowerSC(file, convenio, user, type)
        break;
        case "PETROBRAS":
          //if (type == 1) await this.importSC(file, convenio, user)
          //else await this.lowerSC(file, convenio)
        break;
        case "CASSI":
          //if (type == 1) await this.importSC(file, convenio)
          //else await this.lowerSC(file, convenio)
        break;
        case "BRADESCO":
          //if (type == 1) await this.importSC(file, convenio)
          //else await this.lowerSC(file, convenio)
        break;
      }
    }
}

module.exports = GuiaService;
