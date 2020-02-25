const db = require('../connexion')
var exports = module.exports = {}

exports.init = async function () {
    return await Promise.all([
        db.Advice.create({
            title: "Désabonnez-vous des newsletters inutiles",
            content: "Vous recevez certainement pas mal de newsletter dans vos mails dont certaines que vous n’avez jamais demandé. C’est notre cas à tous, un mauvais clic, un mail de pub, nous en avons tous déjà eu dans notre boite mail. Cependant, savez-vous que les serveurs qui envoient ces mails ont besoin de refroidir ? Qui dit refroidir d’un côté dit réchauffer de l’autre. C’est donc souvent l'eau des mers et tout leur écosystèmes qui prennent pour quelques dizaines de milliers de mails."
        }),
        db.Advice.create({
            title: "Accèdez directement à vos sites favoris",
            content: "Nous avons tous nos petites habitudes sur internet et nous visitons souvent les mêmes sites internet. Un geste très simple permet de reduire l'empreinte carbone de votre navigation: enregistrer ses sites préférés en favori. Cela permet d'éviter une recherche, et malgré le gain insignifiant sur une recherche, multiplié par le nombre de recherche qui sont faites quotidiennement cela fait un gain énorme."
        }),
        db.Advice.create({
            title: "Je vide la corbeille de ma boite mail",
            content: "Notre boîte mail est le parfait exemple de l’impact négatif sur la planète que notre vie technologique peut engendrer “à l’insu de notre plein gré”. Et oui, il ne faut pas se voiler la face, si on nous pose la question, on sait que les serveurs consomment énormément d’électricité. Par contre, au moment de faire le lien entre corbeille pleine, données qui ne servent à rien, serveurs pleins à craquer qui tournent inutilement et gâchis de ressources naturelles, là, c’est plus compliqué. Prennez le réflexe vider la corbeille de votre boite mail. Plus d'informations: https://cacommenceparmoi.org/action/vider-sa-corbeille/"
        }),
        db.Advice.create({
            title: "Je désactive l'autoplay des vidéos sur les réseaux sociaux et sites de VOD",
            content: "La vidéo, sous toute ses formes, représentent près de 80% du traffic internet mondial. Sur les plateformes et réseaux sociaux, les vidéos sont souvent lancées de manière automatique (ce que l'on appelle autoplay). Choisissons le contenu vidéo que l'on souhaite regarder plutôt que de laisser les plateformes nous imposer la lecture automatique. Pour cela, la majorité des plateformes permettent de désactiver cet \"autoplay\" dans les paramètres, afin de réduire considérablement la consommation totale de notre navigation. Plus d'informations : https://theshiftproject.org/article/climat-insoutenable-usage-video/"
        }),
        db.Advice.create({
            title: "Je navigue en priorité sur des connexions wifi ou filaires, en évitant le réseau mobile",
            content: "Selon greenit.fr, la navigation sur un réseau 4G consommerait jusqu'à 23 fois plus d'énergies que sur un réseau wifi. Par conséquent, j'évite les téléchargements et la consommation de vidéos en ligne lorsque je suis connecté via un réseau mobile (3G, 4G, bientôt 5G). Plus d'informations : https://www.greenit.fr/2016/03/15/internet-mobile-la-4g-est-elle-une-abomination-energetique/"
        })
    ])

}
