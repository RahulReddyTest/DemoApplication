export default class commonFunctions{
     checkIfEleExists(element){
        return new Promise((resolve,reject)=>{
            /// here if  ele exists or not
            cy.get('body').find( element ).its('length').then(res=>{
                if(res > 0){
                    resolve(element + "element found");
                }else{
                    reject(element + "element not found");
                }
            });
        })
    }  
}