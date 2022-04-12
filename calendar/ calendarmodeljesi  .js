    var calendar = {
        notes: {
            id: {
                notes_id: "",
                title: "",
                createdDate: "",
                isChecked: "",   //boolean
                stared: "",  //boolean
                description: "text (or) checklist",
                text: "",
                checkList: [
                    {
                        ischecked: "",    //boolean
                        text: "",
                        deleteitem: function () { },
                    }
                ],
                convertTotask: function () { },
                convertTOevent: function () { },
                deleteMultipleitems: function () { },   //delete multiple selected checklist
                checkedAll: function () { },    //check all items in description
                uncheckedAll: function () { },  //
                deleteNote: function () { },    // delete the one current note
                editNote: function () { },  //delete the one current note
                saving: function () { },
            },
            notes_id: ['id1','id2','id3'],
            trash: [
                {
                    title:'',
                    description:'',
                    deletingforever:function(){},
                    restoring:function(){}                             
                }
            ],
            sorting: function () { },
            deleteMultipleNotes: function () { },
        },
        events: {
            id: {
                event_id: "",
                checked: 'boolean',
                fullday: "boolean",
                //if choose "fullday" ,starting time and end time automatically set.but if you choose "required time",starting and end time will be set custom time.
                starting_time: "",
                ending_time: "",
                dateOfcreate: "",
                category: "",
                repeat: "boolean",
                reminder: "boolean",
                //this below  properties will create if this event have reminder while saving
                reminder_time: "time",
                stop: "boolean",
                //this below  properties will create if this event have repeat while saving        
                repeat_type: 'daily',
                dataForRepeat: 'alldays',
                repeatEnd: "by date",
                edit: function () { },
                delete: function () { },
            },
            event_id: ['id1','id2','id3'],
            trash: [
                {
                    title:'',
                    description:'',
                    time:'',
                    category:'',
                    deletingforever:function(){},
                    restoring:function(){}                         
                }
            ],
            addEvent: function () { },
            deleteMultiple: function () { },
            repeating: function () { },
            remainder: function () { },
            selectAll: function () { },
            unselect: function () { },
            sorting: function () { },
            filter: function () { },
            trashevents: function () { }
        },
        tasks: {
            id: {
                task_id: "number",
                fullday: "boolean",
                checked: 'boolean',
                //if choose "fullday" ,starting time and end time automatically set.but if you choose "required time",starting and end time will be set custom time.
                starting_time: "",
                ending_time: "",
                category: "",
                status: "",//only  for task
                importance: "",//only for task
                repeat: "boolean",
                reminder: "boolean",
                //this below  properties will creat if this event have reminder while saving
                reminder_time: "time",
                snooze: "boolean",//up to two times
                stop: "boolean",
                snooze_count: "number", //maximum 2 
                //this below  properties will creat if this event have repeat while saving          
                repeat_type: 'daily',
                dataForRepeat: 'alldays',
                repeatEnd: "by date",
                edit: function () { },
                delete: function () { },
                reschedule: function () { },
            },
            task_id: ['id1','id2','id3'],
            trash: [
                {
                    title:'',
                    description:'',
                    time:'',
                    category:'' ,
                    deletingforever:function(){},
                    restoring:function(){}                        
                }
            ],
            addEvent: function () { },
            deleteMultiple: function () { },
            repeating: function () { },
            remainder: function () { },
            selectAll: function () { },
            unselect: function () { },
            sorting: function () { },
            filter: function () { },
            confirmation: function () { },
            trashtask: function () { },
            upcomingtask: function () { },
            completedtask: function () { },
            trashtask: function () { },
            pendingtask: function () { },
            currenttask: function () { },
        },
        notificaton: [
            {
                title:'',
                description:'',
                remindedtime:''//or taskended time in confirmation alert 
            }
        ],
        reschedule: {    //to  reschdule only one event
            starting_time: "",
            ending_time: '',
            replacing_time: "",
            //to reschdule more than one event
            starting_time: '',
            range: '',
            replacement_time: ''
        },
        repeaters: {        //possibilities
            type: 'daily' || 'weekly' || 'monthly' || 'yearly',
            //daily
            daily: 'alldays' || 'weekdays' || 'weekend',
            weekly: 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday' || 'saturday' || 'sunday',//more than one days
            monthly: {
                on_that_date: 'default is created date or custom date',//optional
                weeks_days: {
                    weeks: 'first' || 'second' || 'third' || 'fourth' || 'last',
                    days: 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday' || 'saturday' || 'sunday',//more than one days
                }
            },
            yearly: 'it will repeated in the created time in each year',
            end: {
                bydate: '',
                bycount: '',
                default: 'never'
            }
        },
    }