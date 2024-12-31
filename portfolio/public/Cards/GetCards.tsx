import Card from "@/components/Card";
import CardInfo from "@/components/info/CardInfo";
import { ReactElement } from "react";

function GetCards() {
    let jsonObjects : CardInfo[] = []

    //populate array
    fetch('.json')
        .then(response => response.json())
        .then(data => {
            // add to jsonobjects
            jsonObjects.push(data)
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });

    let components : ReactElement[] = []
    jsonObjects.forEach(element => {
        var x :ReactElement = (
            <Card Title={element.Title} description={element.description}></Card>
        )
        components.push(x);
    });
    return components
}

export default GetCards;