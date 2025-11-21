type Hero = {
    id: string;
    title: string;
    subTitle?: string;
    description: string
};

export const heros: Hero[] = [
    {
        id: '1',
        title: 'Bem-vindo ao IFAM',
        subTitle: 'Seu portal de informações',
        description: 'Seu portal de informação. Acesse notícias, eventos, calendário acadêmico e muito mais.',
    },

    {
        id: '2',
        title: 'Explore Novas Funcionalidades',
        subTitle: 'Ferramentas para você',
        description: 'Descubra todas as ferramentas para facilitar sua vida acadêmica.',
    },

    {
        id: '3',
        title: 'Fique Atualizado',
        subTitle: 'Últimas notícias',
        description: 'Receba as últimas notícias e atualizações diretamente no seu dispositivo.',
    },

    {
        id: '4',
        title: 'Participe da Comunidade',
        subTitle: 'Conecte-se com outros estudantes',
        description: 'Conecte-se com outros estudantes e participe de eventos e atividades acadêmicas.',
    }
]