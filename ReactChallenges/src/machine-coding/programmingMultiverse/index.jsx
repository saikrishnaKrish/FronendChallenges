import languagesData from "./languagesData"
import styles from './styles.module.css'

const LanguageDetail=({name,year,creator,usecase})=>{
    return <div className={styles.langCard}>
           <h2 className={styles.langName}> {name}</h2>
            <p className={styles.info}>Year of start: {year}</p>
            <p className={styles.info}>Creator : {creator}</p>
            <p className={styles.info}>Use case: {usecase}</p>
          </div>
}


const ProgrammingMutltiverse=()=>{

return(<div className={styles.container}>
       <div className={styles.languagesList}> 
       {
        languagesData.length>0 && 
        languagesData.map((language,index)=>{            // console.log(language)
           return <LanguageDetail key={index} {...language} />
        })}
       </div>
        
    </div>)
}


export default ProgrammingMutltiverse