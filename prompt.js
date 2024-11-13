const promt = "Zredaguj ttext ponieżej:";
import fs from 'fs';
var fileConntent ="";
fs.readFile("article.txt",'utf8',(err,data)=>
{
    if(err)
    {
        console.error("Błąd przy odczycie",err);
        return;
    }
    fileConntent = data;
    console.log('Promt :',fileConntent)
}
 
);

 export const FinalCommand = promt + " " + fileConntent;
 //console.log(FinalCommand);

