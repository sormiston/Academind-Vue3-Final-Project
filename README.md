## Final Project: Maximilian Schwarzmueller's Vue3 JS course on Udemy

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
  
## Backend Calls

* PUT to upgrade user to coach on Vuex ACTION ['coaches/registerCoach']
* GET list of coaches on CoachesList load
* GET all requests on RequestsReceived load
* POST new request on Vuex Action ['requests/newRequest']

## Async Components / Lazy Loading
 ### Global Components
 In main.js, with base-dialog as example...
  * import `defineAsyncComponent` from Vue
  * import(pathToComponent) can be sent as a callback parameter provided to defineAsyncComponent(), which should be referenced by a variable
    * `const BaseDialog =  defineAsyncComponent(() => import('./components/ui/BaseDialog.vue'))`
  * the component is otherwise registered as usual
  
  ### Lazily Loading Routes
    * same concept, but use webpack dynamic import syntax directly, ex:
      * `const Foo = () => import('./Foo.vue')`
