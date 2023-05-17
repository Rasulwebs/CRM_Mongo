
                                                    
-------------------------------------------------------------------------------------------------
GET 
    ADMIN + TOKEN
      post  /admin/login     {gmail, contact}  < - response + gmail-> link{code}
      get   /pass/code         check(code)     < - response + token


                                                pagination  1 x 10
    ADMIN + TOKEN
       
        /department/1                          < - directions & positions
        /department/directions/3               < - dir_name.groups
        /department/positions/2                < - dir_name.users
        /department?positions=pos_name         < - dir_name.users
        /department?directions=dir_name        < - dir_name.groups
        /groups                                < - groups        
        /groups/2                              < - 2-gr.users             on
        /users                                 < - users                  on  
        /users?group=4&onsite=off              < - 4-gr.users             off  
        /users?username=name                   < - name.users             on
        /users?contact=number                  < - number.user            on
        /users?gender=male                     < - male.users             on

    USER + TOKEN   student
        /users                                 < - user                   user.info, payment, group, direction, on|off
    USER + TOKEN   teacher
        /users                                 < - user                   user.info, position, salary , teacher.groups
        /groups                                < - teacher.groups
        /groups/2                              < - teacher.2-group        group.info, number, direction, student_count



    USER + TOKEN   accountant
        /incomes                               < - incomes     
        /incomes?month=1                       < - 1 month old incomes     
        /outlay                                < - outlay     
        /outlay?month=12                       < - 12 month old outlay     

-------------------------------------------------------------------------------------------------
POST
    ADMIN + TOKEN
    
        /department            {args}          < - response      
        /directions            {args}          < - response      
        /positions             {args}          < - response      
        /groups                {args}          < - response      
        /users                 {args}          < - response  + ID  

    USER + TOKEN   accountant
        /incomes               {args}          < - response    
        /outlay                {args}          < - response    


    USER       
        /users/login              {gmail,contact}    < - response + token

    USER + TOKEN   teacher
        /check                 {args}          < - response    

-------------------------------------------------------------------------------------------------
UPDATE
    ADMIN + TOKEN
        /department            {args}          < - response      
        /directions            {args}          < - response      
        /positions             {args}          < - response      
        /groups                {args}          < - response      
        /users                 {args}          < - response    
        
    USER + TOKEN   accountant
        /incomes/2             {args}          < - response    
        /outlay/5              {args}          < - response     
                    
    USER + TOKEN   teacher
        /check                 {args}          < - response    
                    
-------------------------------------------------------------------------------------------------

DELETE 
    ADMIN + TOKEN
        /department/1       +                  < - response      
        /directions/5       +                  < - response      
        /positions/6                           < - response      
        /groups/3         +                    < - response      
        /users/8          +                    < - response      

