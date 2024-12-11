<?php

declare(strict_types=1);

namespace App\Enum;

enum CategoryEnum: string
{
    // Construção e Reforma
    case PEDREIRO = 'PEDREIRO';
    case ELETRICISTA = 'ELETRICISTA';
    case ENCANADOR = 'ENCANADOR';
    case PINTOR = 'PINTOR';
    case MARCENEIRO = 'MARCENEIRO';
    case VIDRACEIRO = 'VIDRACEIRO';

    // Limpeza e Organização
    case FAXINEIRA = 'FAXINEIRA';
    case DIARISTA = 'DIARISTA';
    case JARDINEIRO = 'JARDINEIRO';
    case LAVAGEM_ESTOFADOS = 'LAVAGEM_ESTOFADOS';
    case ORGANIZADOR = 'ORGANIZADOR';

    // Tecnologia
    case DESENVOLVEDOR = 'DESENVOLVEDOR';
    case TECNICO_INFORMATICA = 'TECNICO_INFORMATICA';
    case WEB_DESIGNER = 'WEB_DESIGNER';
    case SUPORTE_TECNICO = 'SUPORTE_TECNICO';
    case CONSULTOR_TI = 'CONSULTOR_TI';

    // Saúde e Bem-Estar
    case PERSONAL_TRAINER = 'PERSONAL_TRAINER';
    case FISIOTERAPEUTA = 'FISIOTERAPEUTA';
    case MASSOTERAPEUTA = 'MASSOTERAPEUTA';
    case NUTRICIONISTA = 'NUTRICIONISTA';
    case PSICOLOGO = 'PSICOLOGO';

    // Beleza e Estética
    case CABELEIREIRO = 'CABELEIREIRO';
    case MANICURE_PEDICURE = 'MANICURE_PEDICURE';
    case MAQUIADOR = 'MAQUIADOR';
    case DEPILADOR = 'DEPILADOR';
    case DESIGNER_SOBRANCELHAS = 'DESIGNER_SOBRANCELHAS';

    // Educação e Treinamento
    case AULAS_PARTICULARES = 'AULAS_PARTICULARES';
    case REFORCO_ESCOLAR = 'REFORCO_ESCOLAR';
    case PREPARACAO_CONCURSOS = 'PREPARACAO_CONCURSOS';
    case AULAS_MUSICA = 'AULAS_MUSICA';
    case TREINAMENTO_PROFISSIONAL = 'TREINAMENTO_PROFISSIONAL';

    // Eventos
    case FOTOGRAFO = 'FOTOGRAFO';
    case VIDEOMAKER = 'VIDEOMAKER';
    case DJ = 'DJ';
    case CERIMONIALISTA = 'CERIMONIALISTA';
    case DECORADOR = 'DECORADOR';
    case BUFFET = 'BUFFET';

    // Serviços Automotivos
    case MECANICO = 'MECANICO';
    case ELETRICISTA_AUTOMOTIVO = 'ELETRICISTA_AUTOMOTIVO';
    case FUNILEIRO = 'FUNILEIRO';
    case LAVAGEM_HIGIENIZACAO = 'LAVAGEM_HIGIENIZACAO';
    case CHAVEIRO_AUTOMOTIVO = 'CHAVEIRO_AUTOMOTIVO';

    // Transporte
    case MOTORISTA_PARTICULAR = 'MOTORISTA_PARTICULAR';
    case TRANSPORTE_ESCOLAR = 'TRANSPORTE_ESCOLAR';
    case FRETE_MUDANCA = 'FRETE_MUDANCA';
    case MOTOBOY = 'MOTOBOY';

    // Consultoria e Serviços Profissionais
    case CONTADOR = 'CONTADOR';
    case ADVOGADO = 'ADVOGADO';
    case CONSULTOR_FINANCEIRO = 'CONSULTOR_FINANCEIRO';
    case CONSULTOR_MARKETING = 'CONSULTOR_MARKETING';
    case TRADUTOR = 'TRADUTOR';

    // Pets
    case BANHO_TOSA = 'BANHO_TOSA';
    case DOG_WALKER = 'DOG_WALKER';
    case ADESTRADOR = 'ADESTRADOR';
    case PET_SITTER = 'PET_SITTER';
    case VETERINARIO = 'VETERINARIO';

    // Outros Serviços
    case CHAVEIRO = 'CHAVEIRO';
    case SEGURANCA_PARTICULAR = 'SEGURANCA_PARTICULAR';
    case DESENTUPIDORA = 'DESENTUPIDORA';
    case FREELANCER = 'FREELANCER';
    case REPAROS_GERAIS = 'REPAROS_GERAIS';

    /**
     * Retorna um nome amigável para exibição ao usuário.
     */
    public function humanReadable(): string
    {
        return match ($this) {
            self::PEDREIRO => 'Pedreiro',
            self::ELETRICISTA => 'Eletricista',
            self::ENCANADOR => 'Encanador',
            self::PINTOR => 'Pintor',
            self::MARCENEIRO => 'Marceneiro',
            self::VIDRACEIRO => 'Vidraceiro',
            self::FAXINEIRA => 'Faxineira',
            self::DIARISTA => 'Diarista',
            self::JARDINEIRO => 'Jardineiro',
            self::LAVAGEM_ESTOFADOS => 'Lavagem de Estofados',
            self::ORGANIZADOR => 'Organizador de Ambientes',
            self::DESENVOLVEDOR => 'Desenvolvedor de Software',
            self::TECNICO_INFORMATICA => 'Técnico de Informática',
            self::WEB_DESIGNER => 'Web Designer',
            self::SUPORTE_TECNICO => 'Suporte Técnico',
            self::CONSULTOR_TI => 'Consultor de TI',
            self::PERSONAL_TRAINER => 'Personal Trainer',
            self::FISIOTERAPEUTA => 'Fisioterapeuta',
            self::MASSOTERAPEUTA => 'Massoterapeuta',
            self::NUTRICIONISTA => 'Nutricionista',
            self::PSICOLOGO => 'Psicólogo',
            self::CABELEIREIRO => 'Cabeleireiro',
            self::MANICURE_PEDICURE => 'Manicure/Pedicure',
            self::MAQUIADOR => 'Maquiador',
            self::DEPILADOR => 'Depilador',
            self::DESIGNER_SOBRANCELHAS => 'Designer de Sobrancelhas',
            self::AULAS_PARTICULARES => 'Aulas Particulares',
            self::REFORCO_ESCOLAR => 'Reforço Escolar',
            self::PREPARACAO_CONCURSOS => 'Preparação para Concursos',
            self::AULAS_MUSICA => 'Aulas de Música',
            self::TREINAMENTO_PROFISSIONAL => 'Treinamento Profissional',
            self::FOTOGRAFO => 'Fotógrafo',
            self::VIDEOMAKER => 'Videomaker',
            self::DJ => 'DJ',
            self::CERIMONIALISTA => 'Cerimonialista',
            self::DECORADOR => 'Decorador',
            self::BUFFET => 'Buffet',
            self::MECANICO => 'Mecânico',
            self::ELETRICISTA_AUTOMOTIVO => 'Eletricista Automotivo',
            self::FUNILEIRO => 'Funileiro',
            self::LAVAGEM_HIGIENIZACAO => 'Lavagem e Higienização',
            self::CHAVEIRO_AUTOMOTIVO => 'Chaveiro Automotivo',
            self::MOTORISTA_PARTICULAR => 'Motorista Particular',
            self::TRANSPORTE_ESCOLAR => 'Transporte Escolar',
            self::FRETE_MUDANCA => 'Frete e Mudança',
            self::MOTOBOY => 'Motoboy',
            self::CONTADOR => 'Contador',
            self::ADVOGADO => 'Advogado',
            self::CONSULTOR_FINANCEIRO => 'Consultor Financeiro',
            self::CONSULTOR_MARKETING => 'Consultor de Marketing',
            self::TRADUTOR => 'Tradutor',
            self::BANHO_TOSA => 'Banho e Tosa',
            self::DOG_WALKER => 'Dog Walker',
            self::ADESTRADOR => 'Adestrador',
            self::PET_SITTER => 'Pet Sitter',
            self::VETERINARIO => 'Veterinário',
            self::CHAVEIRO => 'Chaveiro',
            self::SEGURANCA_PARTICULAR => 'Segurança Particular',
            self::DESENTUPIDORA => 'Desentupidora',
            self::FREELANCER => 'Freelancer',
            self::REPAROS_GERAIS => 'Reparos Gerais',
        };
    }

    public static function listAllFriendly(): array
    {
        $list = [];
        foreach (self::cases() as $category) {
            $list[$category->value] = $category->humanReadable();
        }

        return $list;
    }

    public static function listAll(): array
    {
        $list = [];
        foreach (self::cases() as $category) {
            $list[$category->value] = $category->value;
        }

        return $list;
    }
}
