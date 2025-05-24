import CardInfo from "@/components/info/CardInfo";
import ProjectCard from "@/components/ProjectCard";
import Card from "@/components/Card";

import { ReactElement } from "react";

import Cards from "@/public/Cards/RegCards.json"
import Projects from "@/public/ProjectCards/ProjectCards.json"

export enum CardType {
    Card,
    Project,
}

function GetCards(type: CardType) {
    var jsonObjects = GetCardInfo(type);

    let components: ReactElement[] = []
    jsonObjects.forEach((element: CardInfo) => {
        if (type == CardType.Card) {
            var x: ReactElement = (< Card key={element.Title} Title={element.Title} description={element.description} Image={element.Image} Link={element.Link} ></Card>)

        } else if (CardType.Project) {
            var x: ReactElement = (
                <ProjectCard key={element.Title} Title={element.Title} description={element.description} Image={element.Image} Link={element.Link} ></ProjectCard>
            )
        }

        components.push(x);
    });
    return components
}

function GetCardInfo(type: CardType) {
    return (type == CardType.Card) ? Cards.Cards : Projects.ProjectCards
}

export default GetCards;
