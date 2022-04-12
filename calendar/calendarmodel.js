var calendar = {
    //reminder and repeat is common for  all events
    reminder: {
        options: [5, 10, 15, 20, 25, 30], //in mins default is 20min
        before_time: 'input value or above options'
    },
    repeat: {
        option: ['daily', 'weekly', 'monthly', 'yearly'],
        selected_type: 'anyone in option',//default is  daily
        daily: {
            select_box: ['alldays', 'weekdays', 'weekends'],
            weekdays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            weekend: ['saturday', 'sunday']
        },
        weekly: {
            check_box: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']// default is day which started day of the task
            //this are the checklist ,we can select more than  one day
        },
        monthly: {
            weeks:{
                select_box: ['first', 'second', 'third', 'fourth', 'last'],
            check_box: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],
            },
            on_the_particular_date:"input value" //fefault is event started date
        },
        yearly: {
            action: 'in this field the event appear in every year in the task converted date and time'
        }
    },
    notes: [
        {
            title: 'any string',
            description: 'any string',            
        }  //multi number of notes
    ],
    checked_notes: ['notes which  are checked'],
    events: {
        event_id: {
            id: event_id,
            start_time: "time and date",
            end_time: "time and date",            
            category: 'string',
            event_title_description: 'checked notes', 
            created_date:'date',
            reminder:'true or false',
            state:'compulsory or not',
            repeat: 'true or false',
            reminding: function () {
                'this function check if this event has reminder or not'
            },
            repeating: function () {
                'this  function check if this event has repeat or not '
            },  
            savingdetails:function(){
                'save the data for this  event in correct order'
            },
            editing:function(){
                'can possible to edit this event'
            }        
        }
    },
    reminders: {
        event_id: {
            id: event_id,
            reminding_time: 'it will take  the time while applying ',
            //snooze and stop is related to reminder 
            snooze: 'true or flase',
            stop: 'true or false',
        }
    },
    repeaters: {

        event_id: {
            id: event_id,
            //the event has repeat functionality and store the object according to the selected type (onlyone) 
            selected_type: 'daily',
            data_needed: 'alldays' || 'weekdays' || 'weekends',  //if the selected type is daily   

            selected_type: 'weekly',
            //one or more than  one days
            days_needed: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],//if selected type is weekly


            selected_type: 'monthly',
            week_needed: 'first' || 'second' || 'third' || 'fourth' || 'last',
            //one or more than one  days
            days_needed: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'],//if selected type is monthly

            selected_type: 'yearly',
            needed: {
                event_start_time: '',
                event_end_time: ''
            }//if selected type is yearly

        }
    },   
    

    gettingwholewevents: function () {
        'return the whole events'
    },
    gettingpreviounsevent: function () {
        'return the past events'
    },
    gettingfutureevent: function () {
        'return the future events'
    },
    gettingcurrentevent: function () {
        'return the  current events'
    },
    removedvent: function () {
        'return removed event '
    },   
   
    creatingnotes: function () {
        'to  creat the new notes'
    },
    checking:function(){
        'this function check if events has started or not or finished'
    }
}