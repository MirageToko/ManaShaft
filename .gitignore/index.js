const Discord = require(`discord.js`);
const bot = new Discord.Client();
var prefix = 'm-';
var prefix2 = 'anime-';
var prefix3 = 'emote-';
var color = '#141A85';
var colorcommand = '#A50C0C';
var colorafk = '#03892E';
var coloranime = '#DA7400';

//----------------------------------------------------------------------------
//---------------------------AnimeGenreType-----------------------------------
//----------------------------------------------------------------------------

var RomanceType = "[:heartbeat: Romance :heartbeat:] ";
var ComedieType = "[:performing_arts: Comédie :performing_arts:] ";
var ActionType = "[:crossed_swords: Action :crossed_swords:] ";
var AventureType = "[:lizard: Aventure :lizard:] ";
var FantastiqueType = "[:mountain: Fantastique :mountain:] ";
var DrameType = "[:anger: Drame :anger:] ";
var EnigmeType = "[:tophat: Enigme :tophat:] ";
var EcchiType = "[:peach: Ecchi :peach:] ";
var ScienceType = "[:dna: Science-Fiction :dna:] ";
var MechaType = "[:satellite: Cyber-Mecha :satellite:] ";
var AmourAmitieType = "[:revolving_hearts: Amour/Amitié :revolving_hearts:] ";

var Isekai = ":comet: Isekai :comet:";
var Shônen = ":leaves: Shônen :leaves:";

//----------------------------------------------------------------------------
//--------------------------MessagePseudoColor--------------------------------
//----------------------------------------------------------------------------

var colorA = "#00CFFF";
var colorB = "#19A1E3";
var colorC = "#A98484";
var colorD = "#F5DD0D";
var colorE = "#D41111";
var colorF = "#F2124D";
var colorG = "#649B88";
var colorH = "#7C46B5";
var colorI = "#791cf8";
var colorJ = "#FFFF00";
var colorK = "#F0E68C";
var colorL = "#dfdabd";
var colorM = "#EE82EE";
var colorN = "#000000";
var colorO = "#708D23";
var colorP = "#FFEFD5";
var colorQ = "#91283B";
var colorR = "#FD6C9E";
var colorS = "#E0CDA9";
var colorT = "#A75502";
var colorU = "#120A8F";
var colorV = "#096A09";
var colorW = "#7B64B2";
var colorX = "#6D8F40";
var colorY = "#FFFFFF";
var colorZ = "#6C0277";

//----------------------------------------------------------------------------
//-----------------------------Démarrage--------------------------------------
//----------------------------------------------------------------------------

bot.on('ready', async () => {
    console.log(`${bot.user.username} est en ligne !`);
    console.log(`Connecté sur ${bot.guilds.cache.size} serveurs`);

    bot.user.setActivity('m-help');
});

bot.on('message', message =>{

//----------------------------------------------------------------------------
//--------------------------Initilization-------------------------------------
//----------------------------------------------------------------------------

var mchannel0 = bot.channels.cache.get('723565220873895936'); //Clairière Fantôme
var mchannel1 = bot.channels.cache.get('722527252130299924'); //Zedvum
var mchannel2 = bot.channels.cache.get('722793744230907974'); //Communauté de Pier Shadow 1
var mchannel3 = bot.channels.cache.get('722814412364447744'); //Ulysse.OKLM le bot

function sendAll(){
  try {
    mchannel0.send(gembed);
    mchannel1.send(gembed);
    mchannel2.send(gembed);
    mchannel3.send(gembed);
  } catch (error) {
    try {
      mchannel1.send(gembed);
      mchannel2.send(gembed);
      mchannel3.send(gembed);
      console.log(`${mchannel0} est K.O`);
    } catch (error) {
      try {
        mchannel0.send(gembed);
        mchannel2.send(gembed);
        mchannel3.send(gembed);
        console.log(`${mchannel1} est K.O`);
      } catch (error) {
        try {
          mchannel0.send(gembed);
          mchannel1.send(gembed);
          mchannel3.send(gembed);
          console.log(`${mchannel2} est K.O`);
        } catch (error) {
          mchannel0.send(gembed);
          mchannel1.send(gembed);
          mchannel2.send(gembed);
          console.log(`${mchannel3} est K.O`);
        }
      }
    }
  }
}

//----------------------------------------------------------------------------
//----------------------------Commandes---------------------------------------
//----------------------------------------------------------------------------

  if(message.content.startsWith(prefix)){

    if(message.content === prefix + 'started'){
      var gembed = new Discord.MessageEmbed()
      .setAuthor(bot.user.username)
      .setColor(color)
      .setDescription("**Bot Activé: ON**")
      .setThumbnail('https://cdn.radiofrance.fr/s3/cruiser-production/2019/07/6c78abb0-2faf-4188-9667-0bc0c8b9be01/gettyimages-147220132.jpg')

      sendAll();

      message.delete();
    }
    if(message.content === prefix + 'stoped'){
      var gembed = new Discord.MessageEmbed()
      .setAuthor(bot.user.username)
      .setColor(color)
      .setDescription("**Bot Désactivé: OFF**")
      .setThumbnail('https://cdn.radiofrance.fr/s3/cruiser-production/2019/07/6c78abb0-2faf-4188-9667-0bc0c8b9be01/gettyimages-147220132.jpg')

      sendAll();

      message.delete();
    }
  }

  if(message.content === prefix + 'help'){
    var gembed = new Discord.MessageEmbed()
      .setTitle("Zone Aide")
      .setDescription("Commandes Disponibles")
      .setColor(colorcommand)
      .setThumbnail(bot.user.avatarURL())
      .setFooter(message.guild.name)
      .addField('m-list', 'Liste des Serveurs relié par ManaShaft')
      .addField('m-animelist', 'Classement Animés')
      .addField('m-afk', 'Faites savoir que vous êtes indisponible')
      .addField('m-unafk', 'Faites savoir que vous êtes de nouveau disponible')
      .addField('m-setup', 'Affiche comment rejoindre ManaChanneling')
      .addField('m-emotelist', 'Emoji/Image version géant')

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + 'list'){

    var gembed = new Discord.MessageEmbed()
        .setTitle("Liste des Serveurs relié par ManaShaft")
        .setColor(colorcommand)
        .setThumbnail(bot.user.avatarURL())
        .setFooter(message.guild.name)
        .addField('CLAIRIÈRE FANTÔME', 'https://discord.gg/YyxkQdT')
        .addField('Zedvum', 'https://discord.gg/nANN9Rf')
        .addField('Communauté de Pier Shadow', 'https://discord.gg/3wHcKK')
        .addField('Ulysse.OKLM le bot', 'https://discord.gg/Z85TUT8')

      if(message.channel.name === '「💬」m-channel'){
        sendAll();
      }
      if(message.channel.name !== '「💬」m-channel'){
        message.channel.send(gembed);
      }
  }

  if(message.content === prefix + 'setup'){

    var gembed = new Discord.MessageEmbed()
        .setTitle("Comment vous rajouter dans l'immense système de ManaShaft")
        .setColor(colorcommand)
        .setThumbnail(bot.user.avatarURL())
        .setFooter(message.guild.name)
        .setDescription("Vous trouverez ci-dessous la procédure pour add le bot et le faire fonctionner")
        .addField("Etape 1: Ajouter le bot", "https://discord.com/oauth2/authorize?client_id=722167239784267897&scope=bot&permissions=8")
        .addField("Etape 2: Créer le salon adéquoi", "Rendez vous dans le serv choisi et créer un salon `「💬」m-channel`")
        .addField("Etape 3: Contacter le créateur du bot", "Venez MP MirageToko#4455")
        .addField("Etape 4: Demande d'ajoute", "Donnez lui l'ID du salon `「💬」m-channel` et une invite de votre serv pour qu'il l'ajoute au m-list")
        .addField("Etape 5: Activation de votre channel", "MirageToko va ajouter au code votre serveur et vous fera signe une fois fini")

      if(message.channel.name === '「💬」m-channel'){
        sendAll();
      }
      if(message.channel.name !== '「💬」m-channel'){
        message.channel.send(gembed);
      }
  }

  if(message.content === prefix + 'animelist'){

    var gembed = new Discord.MessageEmbed()
        .setTitle("Animes classés selon MirageToko")
        .setDescription("Le ministère de la culture vous informe que ceci est un classement personnel, il ne conviendra donc pas à certaines personnes. Pour afficher les infos d'un animé faites **m-anime-** + l'**id** entre crochet (ex: m-anime-sao).")
        .setColor(colorcommand)
        .setThumbnail("https://m.media-amazon.com/images/I/51G8frCYMjL.jpg")
        .setImage("https://www.ledojomanga.com/bdd_local/upload/images/Death-March-kara%20Hajimaru-Isekai-Kyusoukyoku.jpg")
        .setFooter(message.guild.name)
        .addField("Mythique SS", ` - Sword Art Online [sao]\n - Isekai wa Smartphone to Tomo ni [smartphoneisekai]\n - Death March Kara Hajimaru Isekai Kyousoukyoku [deathmarch]`)
        .addField("Légendaire S", " - Log Horizon [loghorizon]\n - Re Zero kara Hajimeru Isekai Seikatsu [rezero]\n - Assassination Classroom [assassination]\n - Overlord [overlord]\n - Seven Deadly Sins [deadlysins]")
        .addField("Epic A", " - Bleach [bleach]\n - Naruto [naruto]\n - Blue Exorcist [blueexorcist]")
        .addField("Bon B", " - Spécial A [special_a]")
        .addField("Correct C", " - Mächen Awankens Romance [mär]");

      if(message.channel.name === '「💬」m-channel'){
        sendAll();
      }
      if(message.channel.name !== '「💬」m-channel'){
        message.channel.send(gembed);
      }
  }

  if(message.content === prefix + 'emotelist'){

    var gembed = new Discord.MessageEmbed()
        .setTitle("Emoji/Image")
        .setColor(colorcommand)
        .setDescription("**m-emote-ID** (ex: m-emote-mcdo)")
        .setThumbnail(bot.user.avatarURL())
        .setFooter(message.guild.name)
        .addField("Emoji", " - mcdo\n - poucerouge\n - poucevert\n - goodjob\n - ehhh\n - smile\n - c_nul\n - mediocre\n - ok\n - laughing_coffin");

      if(message.channel.name === '「💬」m-channel'){
        sendAll();
      }
      if(message.channel.name !== '「💬」m-channel'){
        message.channel.send(gembed);
      }
  }

//----------------------------------------------------------------------------
//--------------------------Commandes-Emote-----------------------------------
//----------------------------------------------------------------------------

if(message.content === prefix + prefix3 + 'mcdo'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294455473209364/72bc55c499738715cb3d2dcbef70c.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'poucevert'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294456605409340/pouce-vert.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'poucerouge'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294464549552148/Sans_titre.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'goodjob'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294455904960542/main.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'ehhh'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294458962608218/Sans_titre_1.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'smile'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294460652912640/Sans_titre_2.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'c_nul'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294462888607764/Sans_titre_3.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'mediocre'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294464167739453/Sans_titre_4.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'ok'){
  var gembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username + ' #' + message.author.discriminator)
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294465795391518/sticker-19-83.png")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

if(message.content === prefix + prefix3 + 'laughing_coffin'){
  var gembed = new Discord.MessageEmbed()
  .setImage("https://media.discordapp.net/attachments/724143023406973010/724294468236476416/thumb_4911_avatar_xl.gif")
  .setTimestamp()
  .setFooter(message.guild.name)
  .setColor(colorcommand)

  if(message.channel.name === '「💬」m-channel'){
    sendAll();
  }
  if(message.channel.name !== '「💬」m-channel'){
    message.channel.send(gembed);
  }
  message.delete();
}

//----------------------------------------------------------------------------
//--------------------------Commandes-Anime-----------------------------------
//----------------------------------------------------------------------------

  if(message.content === prefix + prefix2 + 'deathmarch'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Death March Kara Hajimaru Isekai Kyousoukyoku")
    .setDescription("Un programmeur âgé de 29 ans se retrouve transporté dans le jeu qu'il était en train de créer. Dans le jeu, ce dernier se nomme Satoo et est âgé de 15 ans. Il décide alors de cacher sa véritable puissance.")
    .setImage("https://discourse.lancea-online.com/uploads/default/original/2X/a/a08f4840eb927a926d0a0632df79df11366cbdde.jpg")
    .setThumbnail("https://m.media-amazon.com/images/I/51G8frCYMjL.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + FantastiqueType + RomanceType)
    .addField("Type", Isekai, true)
    .addField("Rang SS", "Mythique", true)
    .addField("Episodes", "12", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'smartphoneisekai'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Isekai wa Smartphone to Tomo ni")
    .setDescription("Tôya Mochizuki est accidentellement tué par Dieu. Pour s'excuser, Dieu l'autorise à réssuscité dans un monde fantastique en exauçant l'un de ses vœux. Tôya décide de garder son téléphone dans ce nouveau monde.")
    .setImage("https://www.nautiljon.com/images/more/00/91/75919.jpg")
    .setThumbnail("https://vignette.wikia.nocookie.net/isekai-smartphone/images/8/88/Isekai_Smartphone_Anime_Key_Visual_02.png/revision/latest?cb=20170422221330")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + ComedieType + FantastiqueType + RomanceType)
    .addField("Type", Isekai, true)
    .addField("Rang SS", "Mythique", true)
    .addField("Episodes", "12", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'sao'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Sword Art Online")
    .setDescription("Le jeu virtuel en ligne MMORPG appelé, Sword Art Online, est enfin ouvert au public. Après une béta test qui a crée un véritable buzz. Cependant, le concepteur de SAO a bloqué le seul moyen pour les joueurs de se déconnecter. Prisonniers dans ce monde virtuel, toutes morts dans le jeu équivaut à une mort cérébrale dans la réalité. Ils leur faudra gravir les 99 étages de Aincrad et battre le dernier Boss.")
    .setImage("https://vignette.wikia.nocookie.net/sword-art-online/images/d/d1/Sword_Art_Online_-_OP1.5_-_Large_06_1.jpg/revision/latest?cb=20130330155311&path-prefix=fr")
    .setThumbnail("https://fr.web.img6.acsta.net/pictures/19/07/09/11/04/5921608.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + FantastiqueType + RomanceType + ScienceType + DrameType)
    .addField("Type", Isekai, true)
    .addField("Rang SS", "Mythique", true)
    .addField("Episodes", "49", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'loghorizon'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Log Horizon")
    .setDescription("L’histoire nous entraîne dans un jeu online du nom d'Elder Tail qui se voit offrir une nouvelle extension: Les Pionniers de la Noosphère. Cependant, les 30 000 joueurs se retrouvent emprisonnés dans ce monde virtuel. Très vite des équipes de guerriers se créent pour faire face aux menaces.")
    .setImage("https://i.imgur.com/DGKdKJB.jpg")
    .setThumbnail("https://www.nautiljon.com/images/anime/00/22/log_horizon_2622.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + ComedieType + FantastiqueType + RomanceType + ScienceType)
    .addField("Type", Isekai, true)
    .addField("Rang S", "Légendaire", true)
    .addField("Episodes", "50", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'rezero'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Re Zero kara Hajimeru Isekai Seikatsu")
    .setDescription("Un jour un jeune homme nommé Natsuki Subaru, à la sortie d'une supérette, est transporté dans un monde parallèle sans aucune explication. En essayant de comprendre pour quoi il se trouve ici, Subaru est attaqué par une bande de brigands mais est sauvé par une jeune fille : Emilia. Pour la remercier de l'aide qu'elle lui a fourni, il décide à son tour de l'aider à retrouver une voleuse qui a dérobé quelque chose à Emilia. Un beau jour, Emilia et Subaru sont attaqués et tués par une mystérieuse personne. Cependant, Subaru se réveille au lieu et au jour où il est arrivé dans ce monde. C'est à ce moment-là qu'il se rend compte qu'il peut retourner dans le passé après être mort. Pour échapper à son funeste destin, Subaru décide d'utiliser son pouvoir pour sauver Emilia et pour se sauver lui-même")
    .setImage("https://vignette.wikia.nocookie.net/reheroex/images/5/59/Natsuki_Subaru.png/revision/latest?cb=20181122012201")
    .setThumbnail("https://www.nautiljon.com/images/anime/00/61/re_zero_kara_hajimeru_isekai_seikatsu_4616.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", DrameType + FantastiqueType + RomanceType + EnigmeType)
    .addField("Type", Isekai, true)
    .addField("Rang S", "Légendaire", true)
    .addField("Episodes", "25", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'assassination'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Assassination Classroom")
    .setDescription("L'histoire se déroule au lycée Kunugigaoka. Koro-sensei est un alien responsable de la destruction d'une partie de la Lune. Il annonce alors au gouvernement de la Terre qu'il désire être le professeur de la classe 3-E, et rajoute que si aucun de ses élèves n'a réussi à le tuer à la fin de l'année, il détruirait la Terre. Les élèves de cette classe auront donc pour objectif d'assassiner leur professeur afin de sauver la Terre et d’empocher une récompense de 10 milliards de yens.")
    .setImage("https://images.justwatch.com/backdrop/11768962/s1440/assassination-classroom")
    .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/710PUtnb5pL._AC_SX522_.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + ComedieType + DrameType + ScienceType + FantastiqueType)
    .addField("Rang S", "Légendaire", true)
    .addField("Episodes", "47", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'fairytail'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Fairy Tail")
    .setDescription("Dans le pays de Fiore, la jeune Lucy a pour but de rejoindre la guilde magique Fairy Tail. Arrivée dans une petite ville côtière, elle entend parler d'un fameux sorcier surnommé Salamander, de Fairy Tail. Lucy décide donc de le rencontrer. Sur le chemin, elle fait la rencontre de Natsu, qui la sauve plus tard de Bora de Providence, le vil imposteur qui se fait appeler Salamander. Lucy remercie Natsu de l'avoir sauvée, et ce dernier l'invite à rejoindre sa guilde, qui n'est autre que Fairy Tail.")
    .setImage("https://www.netflix-news.com/wp-content/uploads/2019/11/fairy-tail-netflix-saison-7-1280x640.jpg")
    .setThumbnail("https://fr.web.img5.acsta.net/pictures/19/07/16/17/41/1894644.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + ComedieType + FantastiqueType + DrameType)
    .addField("Type", Shônen, true)
    .addField("Rang A", "Epic", true)
    .addField("Episodes", "298", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'bleach'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Bleach")
    .setDescription("Depuis la mort de sa mère Kurosaki Ichigo vit avec son père et ses deux jeunes soeurs. Il est un étudiant comme les autres ou presque, puisqu'il peut voir les âmes des êtres disparus. C'est ainsi qu'en voulant sauver l'une de ces âmes d'un énorme monstre, il fait la connaissance de Kushiki Rukia, un Shinigami. A cet instant il n'imaginait pas encore a quel point cette rencontre allait bouleverser son existence.")
    .setImage("https://static1.squarespace.com/static/5b7ba7b1c3c16adffa50a121/5b988bed39de2430c93d8839/5b98942839de2430c93e98a7/1536726056839/Ep._203_-_Gotei_13_gather_at_Fake_Karakura_Town-1024x576.jpg?format=original")
    .setThumbnail("https://i.pinimg.com/originals/62/d5/a0/62d5a03f9e0e4eaa5d153b55ba8ce467.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + FantastiqueType + ScienceType + DrameType)
    .addField("Type", Shônen, true)
    .addField("Rang A", "Epic", true)
    .addField("Episodes", "366", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'naruto'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Naruto")
    .setDescription("L'histoire commence dans le village caché de Konoha, où vit Naruto Uzumaki, le pire garnement de L'ordre des ninjas ! Cependant, un grand secret plane autour de lui : douze ans auparavant, le puissant Démon Kyûbi, le démon-renard à neuf queues, dévastait des forêts et des villages, puis fut emprisonné par le quatrième Hokage dans le corps de Naruto alors qu'il n'était qu'un bébé. Celui-ci souhaite devenir le plus grand des Hokage.")
    .setImage("https://fr.web.img3.acsta.net/newsv7/20/05/19/16/31/2372923.jpg")
    .setThumbnail("https://fr.web.img2.acsta.net/pictures/19/08/02/15/12/4423178.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + ComedieType + DrameType)
    .addField("Type", Shônen, true)
    .addField("Rang A", "Epic", true)
    .addField("Episodes", "720", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'blueexorcist'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Blue Exorcist")
    .setDescription("Rin et Yukio, ont été élevés par un éminent prêtre exorciste. Mais un jour Rin découvre que son véritable géniteur n'est autre que Satan ! Alors que le monde est envahi par des êtres maléfiques, Rin jure de devenir le meilleur exorciste Afin de vaincre son père, Satan. Pour accomplir son but il entre à l'Académie de La Croix-Vraie afin de maîtriser les techniques d'exorcisme.")
    .setImage("https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZJQNoqx_nG1zLInqCZmzWgyyljIEQvg1q1JiLvQUGiOLoaLp4O-9iYcZ-HqmhQNNcpfzkp7_z8dqv2B60Q0C0-0m3Mk.jpg?r=dda")
    .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/81X2n6OloVL.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + ComedieType + DrameType + ScienceType + FantastiqueType)
    .addField("Rang A", "Epic", true)
    .addField("Episodes", "37", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'overlord'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Overlord")
    .setDescription("L'histoire débute dans un jeu qui se nomme Yggdrasil. Le jeu le plus populaire du moment, cependant ce dernier décide de fermer ses serveurs à minuit. Nous suivons alors un joueur sous le pseudonyme de Momonga, ce dernier est le chef de la guilde et décide tout seul d'attendre jusqu'à la fermeture du jeu. Problème, alors que minuit vient de passer, notre cher Momonga est toujours dans les jeux. C'est alors qu'il remarque rapidement que ce n'est plus le jeu auquel il passait ses journées à jouer. Les commandes du jeu n'existent plus et les PNJ sont devenus des êtres ayant des sentiments et une existence qui leur est propre.")
    .setImage("https://fr.web.img4.acsta.net/r_1280_720/newsv7/18/08/07/17/57/13315520.jpg")
    .setThumbnail("https://cdn.cinemur.fr/series/cache/360x480_overlord-5045-season-1_5b4050e6961ed.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + FantastiqueType + ScienceType)
    .addField("Type", Isekai, true)
    .addField("Rang S", "Légendaire", true)
    .addField("Episodes", "39", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'special_a'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Spécial A")
    .setDescription("Hanazono Hikari et Kei Takishima sont des amis d’enfance. Le jour de leur rencontre, Kei défia Hikari dans un match de catch, qu’elle perdit. Depuis ce jour elle a décidé de défier Kei dans tout ce qui pourrait être un challenge, du sport aux devoirs scolaire, sans jamais réussir une seule fois à gagner. Aujourd’hui ils sont les deux meilleurs étudiants d’ Hakusenkan, une école très prestigieuse, et leur relation est toujours aussi ambigüe car si Kei a développé des sentiments amoureux pour Hikari, cette dernière est trop obnubilée par son désir de victoire pour s’en apercevoir.")
    .setImage("https://randomc.net/image/Special%20A/Special%20A%20-%2021%20-%20Large%2016.jpg")
    .setThumbnail("https://ekladata.com/IMjp4ACQl3dFPpUKNhklQqNIFqU.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ComedieType + AmourAmitieType + DrameType + RomanceType)
    .addField("Rang B", "Bon", true)
    .addField("Episodes", "24", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'mär'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Märchen Awakens Romance")
    .setDescription("Ginta est un élève peu doué en classe et en sport, mais dans ses rêves, il est le héros d'un monde féerique. Un jour à l'école, il emprunte une porte magique qui le conduit dans le monde de MÄR Heaven, le monde de ses rêves. Un peu par hasard, il s'empare d'un ÄRM, un artefact au grand pouvoir, nommé Babbo. Mais celui-ci n'est pas un ÄRM ordinaire, il est vivant et doté de la parole. Commence alors pour Ginta une quête extraordinaire dans le monde de MÄR.")
    .setImage("https://static1.wikia.nocookie.net/__cb20120907001333/mar/images/0/0e/Ginta_Anime.png")
    .setThumbnail("https://i.pinimg.com/originals/d3/ee/8f/d3ee8f5afcc3db94e4a64f3a46be9cdf.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + FantastiqueType + ComedieType)
    .addField("Type", Isekai, true)
    .addField("Rang C", "Correct", true)
    .addField("Episodes", "52", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

  if(message.content === prefix + prefix2 + 'deadlysins'){
    var gembed = new Discord.MessageEmbed()
    .setTitle("Seven Deadly Sins")
    .setDescription("Les Sept Péchés Capitaux, un groupe de chevaliers maléfiques ayant conspiré contre le royaume de Britannia, ont été exterminés par les Chevaliers Sacrés, cependant on dit qu'ils sont encore en vie. Dix ans plus tard, les Chevaliers Sacrés ont mis en place un coup d'état et ont fait prisonnier le roi, et sont devenus les nouveaux tyrans régnant sur le royaume. Elizabeth, la fille unique du roi, planifie un voyage pour trouver les Sept Péchés Capitaux afin de demander leur aide pour sauver le royaume .")
    .setImage("https://4.bp.blogspot.com/-luOvr23w-Q4/WRdQcybBXgI/AAAAAAAAAZ8/d96y4PEcYVMmxwaiNLrUNc1_olPbGXTWQCLcB/s1600/90edcddd5ac365c36d3a65e4bec6666d.png")
    .setThumbnail("https://www.nautiljon.com/images/breves/00/94/1554889718088_image.jpg")
    .setTimestamp()
    .setFooter(message.guild.name)
    .setColor(coloranime)
    .setAuthor("Classement Animés")
    .addField("Genre", ActionType + AventureType + FantastiqueType)
    .addField("Rang S", "Légendaire", true)
    .addField("Episodes", "48", true)

    if(message.channel.name === '「💬」m-channel'){
      sendAll();
    }
    if(message.channel.name !== '「💬」m-channel'){
      message.channel.send(gembed);
    }
  }

//----------------------------------------------------------------------------
//----------------------------PieceJointe-------------------------------------
//----------------------------------------------------------------------------

  if(message.content.includes.length > 0 && message.content.startsWith(prefix + 'patch ')){
    var gembed = new Discord.MessageEmbed()
      .setAuthor(message.author.username + ' #' + message.author.discriminator)
      .setThumbnail(message.author.avatarURL())
      .setColor(color)
      .setDescription(message.content.includes.name)
      .setFooter(message.guild.name)
      .setTimestamp()

      message.channel.send(gembed);

    console.log(`${message.author.username} #${message.author.discriminator} -> ${message.guild.name}`);
  }
//----------------------------------------------------------------------------
//----------------------------ManaChannel-------------------------------------
//----------------------------------------------------------------------------

  if(message.channel.name === '「💬」m-channel'){
    if(message.author.id !== '722167239784267897'){

      let avatar = message.author.avatarURL();
      if(avatar){
        avatar = message.author.avatarURL();
      } else {
        avatar = "https://support.discord.com/hc/user_images/l12c7vKVRCd-XLIdDkLUDg.png";
      }

      if(message.content === prefix + 'afk' || message.content === prefix + 'unafk'){
        if(message.content === prefix + 'afk'){

          var gembed = new Discord.MessageEmbed()
              .setTitle(`${message.author.username + " #" + message.author.discriminator} est désormais AFK`)
              .setColor(colorafk)
              .setThumbnail(avatar)
      
            if(message.channel.name === '「💬」m-channel'){
              sendAll();
            }
            if(message.channel.name !== '「💬」m-channel'){
              message.channel.send(gembed);
            }
        }
      
        if(message.content === prefix + 'unafk'){
      
          var gembed = new Discord.MessageEmbed()
              .setTitle(`${message.author.username + " #" + message.author.discriminator} n'est plus AFK`)
              .setColor(colorafk)
              .setThumbnail(avatar)
      
            if(message.channel.name === '「💬」m-channel'){
              sendAll();
            }
            if(message.channel.name !== '「💬」m-channel'){
              message.channel.send(gembed);
            }
        }
      } else {
        if(message.content.endsWith(".png" || ".jpg" || ".gif" || ".jpeg") && message.content.startsWith("http")){
          let msg = message.content;

          var gembed = new Discord.MessageEmbed()
          .setAuthor(message.author.username + ' #' + message.author.discriminator)
          .setThumbnail(avatar)
          .setColor(color)
          .setImage(`${msg}`)
          .setFooter(message.guild.name)
          .setTimestamp()

        sendAll();

        console.log(`${message.author.username} #${message.author.discriminator} -> ${message.guild.name}`);
        } else {
        let msg = message.content;

        var gembed = new Discord.MessageEmbed()
        .setAuthor(message.author.username + ' #' + message.author.discriminator)
        .setThumbnail(avatar)
        .setColor(color)
        .setDescription(msg)
        .setFooter(message.guild.name)
        .setTimestamp()

        sendAll();

        console.log(`${message.author.username} #${message.author.discriminator} -> ${message.guild.name}`);
        }
      }
      message.delete();
    }
  }
});

//----------------------------------------------------------------------------
//----------------------------Connection--------------------------------------
//----------------------------------------------------------------------------

bot.login('NzIyMTY3MjM5Nzg0MjY3ODk3.Xuzlqw.rSOUgye1K4Puy1a7Pbf45ZuQxSY');