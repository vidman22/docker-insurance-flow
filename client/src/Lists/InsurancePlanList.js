const InsuranceHealthPlans = [
    {
        name: 'AARP',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: ['Medicare must be primary if you have Medi-Cal'],
        flow: 'HMO',
        taxIDPC: '202138632'
    },{
        name: 'Aetna',
        selectedType: '',
        type: 'healthPlan',
        EPOAccepted: false,
        POSAccepted: true,
        PPOexceptions: ['Aetna Better Health is not in network'],
        flow: 'allFour',
        taxIDPC: '202138632'
    },
    // {
    //     name: 'Aetna Better Health',
    //     selectedType: '',
    //     type: 'out-of-network',
    //     PPOexceptions: ['Aetna Better Health'],
    //     
    //     flow: 'out-of-network',
    //     taxIDPC: '202138632'
    // },
    {
        name: 'Alignment',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'HMO',
        taxIDPC: '202138632'
    },{
        name: 'All Saver',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Anthem Blue Cross',
        selectedType: '',
        type: 'healthPlan',
        EPOAccepted: false,
        PPOexceptions: [],
        flow: 'allThree',
        taxIDPC: '202138632'
    },{
        name: 'Beech Street',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Blue Cross - Anthem',
        selectedType: '',
        type: 'healthPlan',
        EPOAccepted: false,
        PPOexceptions: [],
        flow: 'allThree',
        taxIDPC: '202138632'
    },{
        name: 'Blue Cross Blue Shield - non-California',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: ['Florida and Alabama plans are not in network'],
        flow: 'bcbs',
        taxIDPC: '202138632'
    },{
        name: 'BlueCross BlueShield - BCBS - non-California',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: ['Florida and Alabama plans are not in network'],
        flow: 'bcbs',
        taxIDPC: '202138632'
    },{
        name: 'Blue Shield of California',
        selectedType: '',
        type: 'healthPlan',
        EPOAccepted: false,
        PPOexceptions: ['Blue Shield Promise Medi-Cal is not in network'],
        flow: 'both',
        taxIDPC: '202138632'
    },{
        name: 'BlueCross BlueShield Federal Employee Program - FEP',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Brand New Day',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'HMO',
        taxIDPC: '202138632'
    },{
        name: 'Cigna',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: ['Cigna LocalPlus is not in network', 'Tufts Health Plan is for urgent care only'],
        flow: 'both',
        taxIDPC: '202138632'
    },
    // {
    //     name: 'Cigna LocalPlus',
    //     selectedType: '',
    //     type: 'out-of-network',
    //     PPOexceptions: ['Cigna LocalPlus'],
    //     
    //     flow: 'out-of-network',
    //     taxIDPC: '202138632'
    // },
    {
        name: 'Community Health Group',
        selectedType: '',
        type: 'out-of-network',
        PPOexceptions: [],
        flow: 'out-of-network',
        taxIDPC: '202138632'
    },{
        name: 'Coventry',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Covered California',
        selectedType: '',
        type: 'covered-california',
        PPOexceptions: [],
        flow: 'covered-california',
        taxIDPC: '202138632'
    },{
        name: 'Federal Employee',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'First Health',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions : ['Moda is not in network'],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'GEHA',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Golden Road',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Golden State',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'HMO',
        taxIDPC: '202138632'
    },{
        name: 'Health Comp',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        EPOAccepted: true,
        flow: 'allThree',
        taxIDPC: '202138632'
    },{
        name: 'HealthNet',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: ['IFP - HealthNet is not in network'],
        flow: 'both',
        taxIDPC: '202138632'
    },{
        name: 'Humana',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'both',
        taxIDPC: '202138632'
    },{
        name: 'Kaiser',
        selectedType: '',
        type: 'out-of-network',
        PPOexceptions: [],
        flow: 'out-of-network',
        taxIDPC: '202138632'
    },{
        name: 'Medicare',
        selectedType: '',
        type: 'medicare',
        PPOexceptions: [],
        flow: 'medicare',
        taxIDPC: '202138632'
    },{
        name: 'Medicare Advantage',
        selectedType: '',
        type: 'advantage',
        PPOexceptions: [],
        flow: 'advantage',
        taxIDPC: '202138632'
    },{
        name: 'Medi-Cal',
        selectedType: '',
        type: 'out-of-network',
        PPOexceptions: [],
        flow: 'medi-cal',
        taxIDPC: '202138632'
    },{
        name: 'MediCal',
        selectedType: '',
        type: 'out-of-network',
        PPOexceptions: [],
        flow: 'medi-cal',
        taxIDPC: '202138632'
    },{
        name: 'Medicaid',
        selectedType: '',
        type: 'out-of-network',
        PPOexceptions: [],
        flow: 'medi-cal',
        taxIDPC: '202138632'
    },{
        name: 'Meritain Health',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Molina',
        selectedType: 'PPO',
        type: 'molina',
        PPOexceptions: [],
        flow: 'molina',
        taxIDPC: '202138632'
    },{
        name: 'Multiplan',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Oxford',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Pacific Source',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Providence Health Plan',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Private Healthcare Systems - PHCS',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'Railroad Medicare',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'SelectHealth',
        selectedType: '',
        type: 'out-of-network',
        PPOexceptions: [],
        flow: 'out-of-network',
        taxIDPC: '202138632'
    },{
        name: 'Scan',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'HMO',
        taxIDPC: '202138632'
    },{
        name: 'Scripps Health Plan',
        selectedType: '',
        type: 'healthPlan',
        EPOAccepted: true,
        PPOexceptions: [],
        flow: 'allThree',
        taxIDPC: '202138632'
    },
    // {
    //     name: 'Scripps Qualcomm',
    //     selectedType: '',
    //     type: 'healthPlan',
    //     PPOexceptions: [],
    //     
    //     flow: 'allSet',
    //     taxIDPC: '202138632'
    // },
    {
        name: 'Sharp Health Plan',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'HMO',
        taxIDPC: '202138632'
    },{
        name: 'TriCare',
        selectedType: '',
        type: 'tricare',
        PPOexceptions: [],
        flow: 'tricare',
        taxIDPC: '202138632'
    },{
        name: 'TriCare Remote',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },
    // {
    //     name: 'United Healthcare - UHC',
    //     selectedType: '',
    //     type: 'healthPlan',
    //     EPOAccepted: true,
    //     PPOexceptions: ['Community Plan of California (Medi-Cal)', 'UHC Student Resources requires prior authorization'],
    //     
    //     flow: 'allThree' ,
    //     taxIDPC: '202138632'
    // },
    {
        name: 'UnitedHealthcare - UHC',
        selectedType: '',
        type: 'healthPlan',
        EPOAccepted: true,
        PPOexceptions: ['Community Plan of California (Medi-Cal) is not in network', 'UHC Student Resources requires prior authorization. Call 1-888-224-4875'],
        flow: 'allThree' ,
        taxIDPC: '202138632'
    },
    {
        name: 'UnitedHealthcare Scripps Qualcomm',
        selectedType: '',
        type: 'healthPlan',
        EPOAccepted: true,
        PPOexceptions: [],
        flow: 'allSet' ,
        taxIDPC: '202138632'
    },
    // {
    //     name: 'United Healthcare - PacifiCare',
    //     selectedType: '',
    //     type: 'healthPlan',
    //     PPOexceptions: ['Community Plan of California (Medi-Cal)', 'Prior authorization required for UHC Student Resources'],
    //     
    //     flow: 'HMO' ,
    //     taxIDPC: '202138632'
    // },
    {
        name: 'United Medical Resources - UMR',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'both',
        taxIDPC: '202138632'
    },{
        name: 'Veterans Affairs - VA',
        selectedType: '',
        type: 'urgent-care-only',
        PPOexceptions: [],
        flow: 'urgent-care-only',
        taxIDPC: '202138632'
    },{
        name: 'Veterans Choice',
        selectedType: '',
        type: 'urgent-care-only',
        PPOexceptions: [],
        flow: 'urgent-care-only',
        taxIDPC: '202138632'
    },{
        name: 'Western Growers Association',
        selectedType: '',
        type: 'healthPlan',
        PPOexceptions: [],
        flow: 'allSet',
        taxIDPC: '202138632'
    },{
        name: 'No insurance',
        selectedType: '',
        type: 'no-health-plan',
        PPOexceptions: [],
        flow: 'no-health-plan',
        taxIDPC: '202138632'
    },
];
export default InsuranceHealthPlans;