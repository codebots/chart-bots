export let chart1 = [
    {
        id: 1,
        name: 'Zone1',
        value: 120
    },
    {
        id: 2,
        name: 'Zone2',
        value: 150
    },
    {
        id: 3,
        name: 'Zone3',
        value: 110
    },
    {
        id: 4,
        name: 'Zone4',
        value: 98
    },
    {
        id: 5,
        name: 'Zone5',
        value: 117
    }
];

export let assetWFS = [{
    WorkflowStatusID: 4,
    name: 'Decommissioned',
    value: 3,
    Percentage: 27.27
},
{
    WorkflowStatusID: 7,
    name: 'InUse',
    value: 3,
    Percentage: 27.27
},
{
    WorkflowStatusID: 6,
    name: 'Maintenance',
    value: 1,
    Percentage: 9.09
},
{
    WorkflowStatusID: 1,
    name: 'Acceptance Testing',
    value: 1,
    Percentage: 9.09
},
{
    WorkflowStatusID: 2,
    name: 'Active',
    value: 1,
    Percentage: 9.09
},
{
    WorkflowStatusID: 0,
    name: 'Others',
    value: 2,
    Percentage: 18.18
}
];

export let single = [
    {
        name: 'Germany',
        value: 8940000
    },
    {
        name: 'USA',
        value: 5000000
    },
    {
        name: 'France',
        value: 7200000
    }
];

export let multi = [
    {
        name: 'Doctor',
        series: [
            {
                name: 'Training Room',
                value: 452
            },
            {
                name: 'WorkStation',
                value: 352
            },
            {
                name: 'Passage 1',
                value: 384
            }
        ]
    },

    {
        name: 'Nurse',
        series: [
            {
                name: 'Training Room',
                value: 300
            },
            {
                name: 'WorkStation',
                value: 202
            },
            {
                name: 'Passage 1',
                value: 184
            }
        ]
    },

    {
        name: 'Thermometer',
        series: [
            {
                name: 'Training Room',
                value: 100
            },
            {
                name: 'WorkStation',
                value: 152
            },
            {
                name: 'Passage 1',
                value: 284
            }
        ]
    }
];