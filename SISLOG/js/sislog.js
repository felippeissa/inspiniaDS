/* SISLOG — estado da aplicação (sem backend: localStorage) */

(function () {
    'use strict';

    var KEY = 'sislog_processos';

    var SEED = [
        {
            id: 1,
            identificacao: 'CRED-2026/001',
            objeto: 'Credenciamento de clínicas para serviços de saúde ocupacional',
            modalidade: 'Credenciamento',
            status: 'Em Andamento',
            orgao: 'SEAD/GO',
            responsavel: 'admin',
            sei: '202600047001234',
            criadoEm: '2026-06-10',
            publicadoEm: '2026-06-18',
            funcoes: [
                { responsavel: 'Larissa Mendes', funcao: 'Presidente da Comissão de Contratação', equipe: 'Comissão Permanente' },
                { responsavel: 'Alexandre Souza', funcao: 'Membro da Comissão de Contratação', equipe: 'Comissão Permanente' },
                { responsavel: 'Suellen Castro', funcao: 'Autoridade Competente', equipe: 'Gabinete' }
            ],
            itens: [
                { item: 'Exame admissional', unidade: 'Unidade', qtd: 1200, valor: 85.00 },
                { item: 'Exame periódico', unidade: 'Unidade', qtd: 3400, valor: 78.50 },
                { item: 'Audiometria', unidade: 'Unidade', qtd: 900, valor: 65.00 }
            ],
            docsAdicionais: ['Estudo Técnico Preliminar', 'Orçamento estimado', 'Minuta contratual'],
            documentos: [
                { nome: 'DOD - Documento de Oficialização de Demanda', tipo: 'DOD', data: '2026-06-10', autor: 'admin' },
                { nome: 'Edital de Credenciamento nº 001/2026', tipo: 'Edital', data: '2026-06-17', autor: 'Larissa Mendes' },
                { nome: 'Parecer Jurídico nº 112/2026', tipo: 'Parecer', data: '2026-06-16', autor: 'PGE/GO' }
            ],
            tramitacao: [
                { data: '2026-06-10 09:12', evento: 'Processo criado em Fase Preparatória', autor: 'admin' },
                { data: '2026-06-16 14:30', evento: 'Parecer jurídico anexado', autor: 'PGE/GO' },
                { data: '2026-06-18 10:00', evento: 'Publicação finalizada — status Em Andamento', autor: 'Larissa Mendes' }
            ],
            avisos: [
                { titulo: 'Retificação do Anexo II', texto: 'Corrigida a tabela de valores de referência do Anexo II.', data: '2026-06-20' }
            ],
            esclarecimentos: [
                { pergunta: 'O credenciamento aceita clínicas de outros municípios?', solicitante: 'Clínica Vida Ltda.', data: '2026-06-21', resposta: 'Sim, desde que possuam unidade de atendimento no Estado de Goiás.', situacao: 'Respondido' },
                { pergunta: 'Qual o prazo de análise da habilitação?', solicitante: 'MedCenter S/A', data: '2026-06-25', resposta: '', situacao: 'Pendente' }
            ],
            impugnacoes: [
                { motivo: 'Exigência de qualificação técnica restritiva (item 8.3)', solicitante: 'Saúde Prime EIRELI', data: '2026-06-22', resposta: 'Impugnação indeferida. Exigência compatível com o objeto.', situacao: 'Indeferida' }
            ],
            propostas: [
                { fornecedor: 'Clínica Vida Ltda.', cnpj: '12.345.678/0001-90', valor: 76.00, data: '2026-06-20', situacao: 'Classificada' },
                { fornecedor: 'MedCenter S/A', cnpj: '98.765.432/0001-10', valor: 78.50, data: '2026-06-22', situacao: 'Classificada' },
                { fornecedor: 'Saúde Prime EIRELI', cnpj: '45.678.912/0001-55', valor: 92.00, data: '2026-06-24', situacao: 'Em análise' }
            ],
            habilitacao: [
                { fornecedor: 'Clínica Vida Ltda.', docs: 'Completa', situacao: 'Habilitado', decisao: 'Documentação conforme edital.', data: '2026-06-26' },
                { fornecedor: 'MedCenter S/A', docs: 'Completa', situacao: 'Habilitado', decisao: 'Documentação conforme edital.', data: '2026-06-27' },
                { fornecedor: 'Saúde Prime EIRELI', docs: 'CND estadual vencida', situacao: 'Em diligência', decisao: '', data: '' }
            ],
            diligencias: [
                { fornecedor: 'Saúde Prime EIRELI', tipo: 'Atualização de documento com validade expirada', prazo: '2026-07-05', situacao: 'Aguardando resposta' }
            ],
            recursos: [
                { fornecedor: 'Saúde Prime EIRELI', objeto: 'Intenção de recurso — análise de habilitação', data: '2026-06-28', situacao: 'Em análise' }
            ],
            credenciados: [
                { fornecedor: 'Clínica Vida Ltda.', objeto: 'Exames ocupacionais', situacao: 'Ativo', data: '2026-06-26', ordem: 1 },
                { fornecedor: 'MedCenter S/A', objeto: 'Exames ocupacionais', situacao: 'Ativo', data: '2026-06-27', ordem: 2 }
            ]
        },
        {
            id: 2,
            identificacao: 'CRED-2026/002',
            objeto: 'Credenciamento de leiloeiros oficiais',
            modalidade: 'Credenciamento',
            status: 'Fase Preparatória',
            orgao: 'SEAD/GO',
            responsavel: 'admin',
            sei: '',
            criadoEm: '2026-06-28',
            publicadoEm: '',
            funcoes: [], itens: [], docsAdicionais: [],
            documentos: [{ nome: 'DOD - Documento de Oficialização de Demanda', tipo: 'DOD', data: '2026-06-28', autor: 'admin' }],
            tramitacao: [{ data: '2026-06-28 11:40', evento: 'Processo criado em Fase Preparatória', autor: 'admin' }],
            avisos: [], esclarecimentos: [], impugnacoes: [], propostas: [], habilitacao: [], diligencias: [], recursos: [], credenciados: []
        },
        {
            id: 3,
            identificacao: 'CRED-2025/014',
            objeto: 'Credenciamento de instituições financeiras para consignado',
            modalidade: 'Credenciamento',
            status: 'Homologada',
            orgao: 'SEAD/GO',
            responsavel: 'admin',
            sei: '202500039009876',
            criadoEm: '2025-11-03',
            publicadoEm: '2025-11-20',
            funcoes: [], itens: [], docsAdicionais: [],
            documentos: [], tramitacao: [
                { data: '2025-11-03 08:15', evento: 'Processo criado em Fase Preparatória', autor: 'admin' },
                { data: '2025-11-20 09:00', evento: 'Publicação finalizada — status Em Andamento', autor: 'admin' },
                { data: '2026-02-12 16:20', evento: 'Processo homologado', autor: 'Autoridade Competente' }
            ],
            avisos: [], esclarecimentos: [], impugnacoes: [], propostas: [], habilitacao: [], diligencias: [], recursos: [],
            credenciados: [
                { fornecedor: 'Banco Alfa S/A', objeto: 'Crédito consignado', situacao: 'Ativo', data: '2025-12-10', ordem: 1 },
                { fornecedor: 'Banco Beta S/A', objeto: 'Crédito consignado', situacao: 'Suspenso', data: '2025-12-15', ordem: 2 }
            ]
        }
    ];

    function load() {
        var raw = localStorage.getItem(KEY);
        if (!raw) {
            localStorage.setItem(KEY, JSON.stringify(SEED));
            return JSON.parse(JSON.stringify(SEED));
        }
        try { return JSON.parse(raw); } catch (e) { return JSON.parse(JSON.stringify(SEED)); }
    }

    function save(list) { localStorage.setItem(KEY, JSON.stringify(list)); }

    window.SISLOG = {
        STATUS: ['Fase Preparatória', 'Em Andamento', 'Suspensa', 'Revogada', 'Anulada', 'Encerrada Parcial', 'Encerrada', 'Homologada Parcial', 'Homologada', 'Arquivado'],

        MODALIDADES: ['Credenciamento', 'Pregão Eletrônico', 'Concorrência', 'Dispensa Eletrônica', 'Inexigibilidade'],

        FUNCOES: ['Agente de Contratação', 'Presidente da Comissão de Contratação', 'Membro da Comissão de Contratação', 'Autoridade Competente', 'Gestor do Contrato', 'Fiscal do Contrato'],

        DOCS_ADICIONAIS: ['Documento de Oficialização de Demanda — DOD', 'Portaria de designação das funções essenciais', 'Estudo Técnico Preliminar', 'Orçamento estimado', 'Planilha de composição de preços', 'Matriz de riscos', 'Termo de referência', 'Justificativa de preço', 'Minuta contratual', 'Parecer jurídico', 'Declaração de compatibilidade orçamentária', 'Autorização da autoridade competente'],

        getAll: load,

        get: function (id) {
            return load().find(function (p) { return p.id === Number(id); }) || null;
        },

        update: function (proc) {
            var list = load();
            var i = list.findIndex(function (p) { return p.id === proc.id; });
            if (i >= 0) { list[i] = proc; save(list); }
        },

        create: function (dados) {
            var list = load();
            var id = list.reduce(function (m, p) { return Math.max(m, p.id); }, 0) + 1;
            var proc = {
                id: id,
                identificacao: dados.identificacao,
                objeto: dados.objeto,
                modalidade: dados.modalidade,
                status: 'Fase Preparatória',
                orgao: dados.orgao || 'SEAD/GO',
                responsavel: dados.responsavel || 'admin',
                sei: dados.sei || '',
                criadoEm: new Date().toISOString().slice(0, 10),
                publicadoEm: '',
                funcoes: [], itens: [], docsAdicionais: [],
                documentos: [],
                tramitacao: [{ data: SISLOG.agora(), evento: 'Processo criado em Fase Preparatória', autor: dados.responsavel || 'admin' }],
                avisos: [], esclarecimentos: [], impugnacoes: [], propostas: [], habilitacao: [], diligencias: [], recursos: [], credenciados: []
            };
            list.push(proc);
            save(list);
            return proc;
        },

        remove: function (id) {
            save(load().filter(function (p) { return p.id !== Number(id); }));
        },

        badge: function (status) {
            var map = {
                'Fase Preparatória': 'text-bg-secondary',
                'Em Andamento': 'text-bg-success',
                'Suspensa': 'text-bg-warning',
                'Revogada': 'text-bg-danger',
                'Anulada': 'text-bg-danger',
                'Encerrada Parcial': 'text-bg-info',
                'Encerrada': 'text-bg-dark',
                'Homologada Parcial': 'text-bg-info',
                'Homologada': 'text-bg-primary',
                'Arquivado': 'text-bg-light'
            };
            return '<span class="badge ' + (map[status] || 'text-bg-secondary') + '">' + status + '</span>';
        },

        badgeSituacao: function (s) {
            var map = {
                'Ativo': 'text-bg-success', 'Habilitado': 'text-bg-success', 'Classificada': 'text-bg-success',
                'Respondido': 'text-bg-success', 'Deferida': 'text-bg-success',
                'Suspenso': 'text-bg-warning', 'Em análise': 'text-bg-warning', 'Em diligência': 'text-bg-warning',
                'Pendente': 'text-bg-warning', 'Aguardando resposta': 'text-bg-warning',
                'Descredenciado': 'text-bg-danger', 'Inabilitado': 'text-bg-danger', 'Desclassificada': 'text-bg-danger', 'Indeferida': 'text-bg-danger'
            };
            return '<span class="badge ' + (map[s] || 'text-bg-secondary') + '">' + s + '</span>';
        },

        moeda: function (v) {
            return Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        },

        dataBR: function (iso) {
            if (!iso) return '—';
            var p = iso.split('-');
            return p.length === 3 ? p[2] + '/' + p[1] + '/' + p[0] : iso;
        },

        agora: function () {
            var d = new Date();
            function z(n) { return String(n).padStart(2, '0'); }
            return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()) + ' ' + z(d.getHours()) + ':' + z(d.getMinutes());
        },

        tramitar: function (proc, evento) {
            proc.tramitacao.push({ data: SISLOG.agora(), evento: evento, autor: sessionStorage.getItem('inspinia_user') || localStorage.getItem('inspinia_user') || 'admin' });
        }
    };
})();
