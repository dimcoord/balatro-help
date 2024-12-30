import Image from "next/image"

export default function Tarots(){
    return(
        <table className="items-center m-auto">
            <div className="mt-20"></div>
            <tbody>
                <tr>
                <th>Tarot Card</th>
                <th>Name</th>
                <th>Description</th>
                </tr>

        <tr>
            <td><a href="https://static.wikia.nocookie.net/balatrogame/images/1/10/Tarot_Fool.png/revision/latest?cb=20230925220339" className="image"><Image alt="Tarot Fool" width={142} height={190} src="/../public/balatro/Tarot_Fool.png"/></a>
            </td>
            <td><span className="text-violet-600"><b>The Fool (0)</b></span>
            </td>
            <td>Creates the last <span className="text-violet-600"><b>Tarot</b></span> or <a href="/wiki/Planet_Cards" title="Planet Cards"><span className="hl-cyan"><b>Planet</b></span></a> card used during this run<br /><small><span className="text-violet-600"><b>The Fool</b></span> excluded</small>
            </td>
        </tr>


        <tr>
            <td><a href="https://static.wikia.nocookie.net/balatrogame/images/c/ce/Tarot_High_Priestess.png/revision/latest?cb=20230925220519" className="image"><Image alt="Tarot High Priestess" width={142} height={190} src="/../public/balatro/Tarot_Fool.png" /></a>
            </td>
            <td><span className="text-violet-600"><b>The High Priestess (II)</b></span>
            </td>
            <td>Creates up to <span className="text-orange-400"><b>2</b></span> random <a href="/wiki/Planet_Cards" title="Planet Cards"><span className="hl-cyan"><b>Planet</b></span></a> cards<br/><span><b>(Must have room)</b></span>
            </td>
        </tr>


        <tr>
        <td><a href="https://static.wikia.nocookie.net/balatrogame/images/3/39/Tarot_Emperor.png/revision/latest?cb=20230925220604" className="image"><Image alt="Tarot Emperor" width={142} height={190} src="/public/balatro/Tarot_Fool.png"/></a>
        </td>
        <td><span className="text-violet-600"><b>The Emperor (IV)</b></span>
        </td>
        <td>Creates up to <span className="text-orange-400"><b>2</b></span> random <span className="text-violet-600"><b>Tarot</b></span> cards<br/><span><b>(Must have room)</b></span>
        </td></tr>





        <tr>
        <td><a href="https://static.wikia.nocookie.net/balatrogame/images/9/98/Tarot_Hermit.png/revision/latest?cb=20230925220806" className="image"><Image alt="Tarot Hermit" width={142} height={190} src="/public/balatro/Tarot_Fool.png"/></a>
        </td>
        <td><span className="text-violet-600"><b>The Hermit (IX)</b></span>
        </td>
        <td>Doubles money<br/><span className="hl-grey"><b>(Max of</b></span> <span className="text-orange-400"><b>$20</b></span><span className="hl-grey"><b>)</b></span>
        </td></tr>



        <tr>
        <td><a href="https://static.wikia.nocookie.net/balatrogame/images/3/35/Tarot_HangedMan.png/revision/latest?cb=20230925220935" className="image"><Image alt="Tarot HangedMan" width={142} height={190} src="/public/balatro/Tarot_Fool.png"/></a>
        </td>
        <td><span className="text-violet-600"><b>The Hanged Man (XII)</b></span>
        </td>
        <td>Destroys up to <span className="text-orange-400"><b>2</b></span> selected cards
        </td></tr>


        <tr>
        <td><a href="https://static.wikia.nocookie.net/balatrogame/images/6/67/Tarot_Temperance.png/revision/latest?cb=20230925221029" className="image"><Image alt="Tarot Temperance" width={142} height={190} src="/public/balatro/Tarot_Fool.png"/></a>
        </td>
        <td><span className="text-violet-600"><b>Temperance (XIV)</b></span>
        </td>
        <td>Gives the total sell value of all current <a href="/wiki/Jokers" title="Jokers">Jokers</a><br/><span className="hl-grey"><b>(Max of</b></span> <span className="text-orange-400"><b>$50</b></span><span className="hl-grey"><b>)</b></span>
        </td></tr>





        <tr>
        <td><a href="https://static.wikia.nocookie.net/balatrogame/images/d/d9/Tarot_Judgement.png/revision/latest?cb=20230925221239" className="image"><Image alt="Tarot Judgement" width={142} height={190} src="/public/balatro/Tarot_Fool.png"/></a>
        </td>
        <td><span className="text-violet-600"><b>Judgement (XX)</b></span>
        </td>
        <td>Creates a random <a href="/wiki/Jokers" title="Jokers"><span className="text-orange-400"><b>Joker</b></span></a> card<br/><span><b>(Must have room)</b></span>
        </td></tr>

            </tbody>
        </table>
    )
}