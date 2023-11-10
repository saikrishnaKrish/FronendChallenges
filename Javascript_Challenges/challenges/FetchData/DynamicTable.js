import getData from '../../utils/fetchData.js'

class DynamicTable{
    constructor(tableId){
        this.tableId=document.getElementById(tableId).getElementsByTagName('tbody')[0];
    }

    populateTable(url){
        try{
            getData(url)
            .then((res)=>{
               if(res!=undefined && res.length){
                   res.forEach(comment => {
                       this.createTableRow(comment)
                   });
               }
               else{
                    let txtNode=document.createTextNode('No Data Found');
                   this.tableId.appendChild(txtNode);
               }
            })
        }
        catch(e){
            console.log(e)
        }
           
    }

    createTableRow(ele){
        // console.log("row",ele);
        const row=this.tableId.insertRow();
        row.insertCell(0).textContent=ele.id;
        row.insertCell(1).textContent=ele.name;
        row.insertCell(2).textContent=ele.email;
        row.insertCell(3).textContent=ele.body;
    }
}

const tableId= new DynamicTable('data-table')
tableId.populateTable('https://jsonplaceholder.typicode.com/posts/1/comments')


const metaTableId= new DynamicTable('meta-table')
metaTableId.populateTable('https://jsonplaceholder.typicode.com/posts/1/comments')



const TId= new DynamicTable('TId-table')
TId.populateTable('https://jsonplaceholder.typicode.com/posts/1/comments')

