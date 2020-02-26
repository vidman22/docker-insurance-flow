const primaryCareProviders = [
    {
        name: 'Babis, Carly',
        type: 'PA-C'
    },
    {
        name:'Bhalrhu, Puneet',
        type: 'MD'
    },
    {
        name:'Bista, Madalasa',
        type: 'MD'
    },
    {
        name:'Blum, Steven',
        type: 'DO'
    },
    {
        name:'Brangoccio, Kelsey',
        type: 'PA-C'
    },
    {
        name:'Brantz, Edward',
        type: 'MD'
    },
    {
        name:'Brunst, Robert',
        type: 'MD'
    },
    {
        name:'Buchner, William Jr.',
        type: 'MD'
    },
    {
        name:'Campagna, Lauren',
        type: 'PA-C'
    },
    {
        name:'Canelo, Nicholas',
        type: 'MD'
    },
    {
        name:'Case, Erinn',
        type: 'FNP'
    },
    {
        name:'Caso, Stephen',
        type: 'PA-C'
    },
    {
        name:'Ceriale, Christopher',
        type: 'PA-C'
    },
    {
        name:'Chan, Alonso',
        type: 'PA-C'
    },
    {
        name:'Chatfield, Alexandra',
        type: 'PA-C'
    },
    {
        name:'Das, Gourab',
        type: 'PA-C'
    },
    {
        name:'Ence, Emily',
        type: 'PA-C'
    },
    {
        name:'Ezzat, Mona',
        type: 'MD'
    },
    {
        name:'Grade, Neenah',
        type: 'PA-C'
    },
    {
        name:'Hoffman, Julie',
        type: 'PA-C'
    },
    {
        name:'Kahl, Nicholas ',
        type: 'FNP'
    },
    {
        name:'Klein, Stephanie',
        type: 'PA-C'
    },
    {
        name:'Kovaleski, Natalia',
        type: 'PA-C'
    },
    {
        name:'Kuperman, Ilan',
        type: 'MD'
    },
    {
        name:'Macy, Melissa',
        type: 'DO'
    },
    {
        name:'Marquis, Paul',
        type: 'MD'
    },
    {
        name:'Maxson, ChristyAnne',
        type: 'MD'
    },
    {
        name:'Memole, Brenna',
        type: 'AGNP'
    },
    {
        name:'Michael, Nicole',
        type: 'FNP'
    },
    {
        name:'Myers, Seymour',
        type: 'MD'
    },
    {
        name:'Myrberg, Brooke',
        type: 'PA-C'
    },
    {
        name:'Ortiz, Kenneth',
        type: 'MD'
    },
    {
        name:'Parrott, Emilia',
        type: 'DO'
    },
    {
        name:'Perlman, Monica',
        type: 'MD'
    },
    {
        name:'Phan, Jennifer',
        type: 'FNP'
    },
    {
        name:'Pierce, Sarah',
        type: 'FNP'
    },
    {
        name:'Pitt, William',
        type: 'MD'
    },
    {
        name:'Raheem, Mirza',
        type: 'MD'
    },
    {
        name:'Rai, Georgina',
        type: 'PA-C'
    },
    {
        name:'Rai, Philippa',
        type: 'PA-C'
    },
    {
        name:'Sarder, Jessica',
        type: 'PA-C'
    },
    {
        name:'Shults, Adam',
        type: 'PA-C'
    },
    {
        name:'Snowden, Kelly',
        type: 'PA-C'
    },
    {
        name:'Soliman, Youstina',
        type: 'MD'
    },
    {
        name:'Stern, Anna',
        type: 'MD'
    },
    {
        name:'Switzer, Jamie',
        type: 'DO'
    },
    {
        name:'Taylor, Susan',
        type: 'MD'
    },
    {
        name:'Tootell, Rhodaline',
        type: 'MD'
    },
    {
        name:'Yartseva, Yuliya',
        type: 'FNP'
    },


    {
        name: 'Carly Babis',
        type: 'PA-C'
    },
    {
        name:'Puneet Bhalrhu',
        type: 'MD'
    },
    {
        name:'Madalasa Bista',
        type: 'MD'
    },
    {
        name:'Steven Blum',
        type: 'DO'
    },
    {
        name:'Kelsey Brangoccio',
        type: 'DO'
    },
    {
        name:'Edward Brantz',
        type: 'MD'
    },
    {
        name:'Robert Brunst',
        type: 'MD'
    },
    {
        name:'William R. Buchner',
        type: 'MD'
    },
    {
        name:'Lauren Campagna',
        type: 'PA-C'
    },
    {
        name:'Nicholas Canelo',
        type: 'MD'
    },
    {
        name:'Erinn Case',
        type: 'FNP'
    },
    {
        name:'Stephen Caso',
        type: 'PA-C'
    },
    {
        name:'Christopher Ceriale',
        type: 'PA-C'
    },
    {
        name:'Alonso Chan',
        type: 'PA-C'
    },
    {
        name:'Alexandra Chatfield',
        type: 'PA-C'
    },
    {
        name:'Gourab Das',
        type: 'PA-C'
    },
    {
        name:'Emily Ence',
        type: 'PA-C'
    },
    {
        name:'Mona Ezzat',
        type: 'MD'
    },
    {
        name:'Neenah Grade',
        type: 'PA-C'
    },
    {
        name:'Julie Hoffman',
        type: 'PA-C'
    },
    {
        name:'Nicholas Kahl ',
        type: 'FNP'
    },
    {
        name:'Stephanie Klein',
        type: 'PA-C'
    },
    {
        name:'Natalia Kovaleski',
        type: 'PA-C'
    },
    {
        name:'Ilan Kuperman',
        type: 'MD'
    },
    {
        name:'Melissa Macy',
        type: 'DO'
    },
    {
        name:'Paul Marquis',
        type: 'MD'
    },
    {
        name:'ChristyAnne Maxson',
        type: 'MD'
    },
    {
        name:'Brenna Memole',
        type: 'AGNP'
    },
    {
        name:'Nicole Michael',
        type: 'FNP'
    },
    {
        name:'Seymour Myers',
        type: 'MD'
    },
    {
        name:'Brooke Myrberg',
        type: 'PA-C'
    },
    {
        name:'Kenneth Ortiz',
        type: 'MD'
    },
    {
        name:'Emilia Parrott',
        type: 'DO'
    },
    {
        name:'Monica Perlman',
        type: 'MD'
    },
    {
        name:'Jennifer Phan',
        type: 'FNP'
    },
    {
        name:'Sarah Pierce',
        type: 'FNP'
    },
    {
        name:'William Pitt',
        type: 'MD'
    },
    {
        name:'Mirza Raheem',
        type: 'MD'
    },
    {
        name:'Georgina Rai',
        type: 'PA-C'
    },
    {
        name:'Philippa Rai',
        type: 'PA-C'
    },
    {
        name:'Jessica Sarder',
        type: 'PA-C'
    },
    {
        name:'Adam Shults',
        type: 'PA-C'
    },
    {
        name:'Kelly Snowden',
        type: 'PA-C'
    },
    {
        name:'Youstina Soliman',
        type: 'MD'
    },
    {
        name:'Anna Stern',
        type: 'MD'
    },
    {
        name:'Jamie Switzer',
        type: 'DO'
    },
    {
        name:'Susan Taylor',
        type: 'MD'
    },
    {
        name:'Rhodaline Tootell',
        type: 'MD'
    },
    {
        name:'Yuliya Yartseva',
        type: 'FNP'
    },
]