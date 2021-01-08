# Plan


## MVP
* Resources to browse, review and contact coaches
  * List all available coaches
  * View coach details
  * Contact a coach
  * Register as a coach
  * View incoming requests
    
## Data Models

1. Coaches
   * _State_: List of Coaches
      * _COACH:_
        * id
        * firstName
        * lastName
        * areas
        * description
        * hourlyRate
    * _Mutations_:
      * register new coach (CREATE)
      * DB fetch and set coaches (READ)
      
   
2. Requests
    * _State_: List of Requests
      * _REQUEST:_
        * coachId
        * message
        * contact email address
    * _Mutations_:
      * contact Coach (CREATE request)
      * DB fetch and set requests
      
## UI

1. Routing + Screen Components
  * /coaches                      -- coachesList
  * /coaches/:id                  -- coachDetail
  * /register                     -- coachRegistration
  * /coaches/:id/contact          -- contactCoach
  * /requests                     -- requestsReceieved
  
