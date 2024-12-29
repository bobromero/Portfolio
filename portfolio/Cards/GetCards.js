import Card from "@/components/Card";
import CardInfo from "@/components/info/CardInfo";

function GetCards() {
    let jsonObjects = []

    //populate array
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            // add to jsonobjects
            jsonObjects.push(data)
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });

    let components = []
    jsonObjects.forEach(element => {
        var x = (
            <Card Title={element.Title} description={element.description}></Card>
        )
        components.push(x);
    });
    return components
}

export default GetCards;