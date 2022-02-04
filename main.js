const Discord = require('discord.js');

const client = new Discord.Client({
    intents:["GUILDS","GUILD_MESSAGES"]
});

client.on("ready", () => {
    console.log('Pokedex mais que online!!!')
})

client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_one'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('Pokémon em sua mão')
        //.setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://cdn.discordapp.com/attachments/895712424987099136/938958649089470484/poke_bank_trangrowth.png')
        .addFields([
            {
                name: 'Pokémon', value:'Tangrowth', inline: true
            },
            {
                name: 'Type:', value:'Grass', inline: true
            },
            {
                name: 'Weight', value:'128.6kg', inline: false
            },
            {
                name: 'Height', value:'2.0m', inline: false
            },
            {
                name: 'Abilities', value:'Chlorophyll and Leaf Guard', inline: false
            }
            
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('https://www.pokemon.com/br/pokedex/tangrowth', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})
client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_mamoswine'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('Aqui está a dex de Mamoswine')
        //.setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://assets.pokemon.com/assets/cms2/img/pokedex/full/473.png')
        .addFields([
            {
                name: 'Pokémon', value:'Mamoswine', inline: true
            },
            {
                name: 'Category', value:'Twin Tusk', inline: true
            },
            {
                name: 'Weight', value:'291.0 kg', inline: false
            },
            {
                name: 'Height', value:'2.5m', inline: false
            },
            {
                name: 'Abilities', value:'Oblivious and Snow Cloak', inline: false
            }
            
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Para consultar a desk de qualquer pokémon do seu time digite /poke_(nome do pokémon)', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})
client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_milotic'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('Aqui está a dex de Milotic')
        //.setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://assets.pokemon.com/assets/cms2/img/pokedex/full/350.png')
        .addFields([
            {
                name: 'Pokémon', value:'Milotic', inline: true
            },
            {
                name: 'Category', value:'Tender', inline: true
            },
            {
                name: 'Weight', value:'162.0 kg', inline: false
            },
            {
                name: 'Height', value:'6.2m', inline: false
            },
            {
                name: 'Abilities', value:'Marvel Scale and Competitive', inline: false
            }
            
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Para consultar a desk de qualquer pokémon do seu time digite /poke_(nome do pokémon)', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})
client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_alakazam'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('Aqui está a dex de Alakazam')
        //.setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png')
        .addFields([
            {
                name: 'Pokémon', value:'Alakazam', inline: true
            },
            {
                name: 'Category', value:'Psi', inline: true
            },
            {
                name: 'Weight', value:'48.0 kg', inline: false
            },
            {
                name: 'Height', value:'6.2m', inline: false
            },
            {
                name: 'Abilities', value:'Inner Focus and Synchronize', inline: false
            }
            
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Para consultar a desk de qualquer pokémon do seu time digite /poke_(nome do pokémon)', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})
client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_gardevoir'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('Aqui está a dex de Gardevoir')
        //.setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png')
        .addFields([
            {
                name: 'Pokémon', value:'Gardevoir', inline: true
            },
            {
                name: 'Category', value:'Embrace', inline: true
            },
            {
                name: 'Weight', value:'48.4 kg', inline: false
            },
            {
                name: 'Height', value:'1.6m', inline: false
            },
            {
                name: 'Abilities', value:'Trace and Synchronize', inline: false
            }
            
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Para consultar a desk de qualquer pokémon do seu time digite /poke_(nome do pokémon)', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})
client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_gardevoir'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('Aqui está a dex de Gardevoir')
        //.setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://assets.pokemon.com/assets/cms2/img/pokedex/full/282.png')
        .addFields([
            {
                name: 'Pokémon', value:'Gardevoir', inline: true
            },
            {
                name: 'Category', value:'Embrace', inline: true
            },
            {
                name: 'Weight', value:'48.4 kg', inline: false
            },
            {
                name: 'Height', value:'1.6m', inline: false
            },
            {
                name: 'Abilities', value:'Trace and Synchronize', inline: false
            }
            
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Para consultar a desk de qualquer pokémon do seu time digite /poke_(nome do pokémon)', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})
client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_dragonite'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLACK')
        .setTitle('Aqui está a dex de Dragonite')
        //.setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png')
        .addFields([
            {
                name: 'Pokémon', value:'Dragonite', inline: true
            },
            {
                name: 'Category', value:'Dragon', inline: true
            },
            {
                name: 'Weight', value:'210.0 kg', inline: false
            },
            {
                name: 'Height', value:'2.2m', inline: false
            },
            {
                name: 'Abilities', value:'Inner Focus', inline: false
            }
            
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Para consultar a desk de qualquer pokémon do seu time digite /poke_(nome do pokémon)', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})


client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_bag'){
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Aqui está sua PokeBag!')
        //.setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://cdn.discordapp.com/attachments/895712424987099136/939281390464282674/download.jpg')
        .addFields([
            {
                name: 'Tangrowth', value:'Macho Lvl 98', inline: false
            },
            {
                name: 'Mamoswine', value:'Macho Lvl 78', inline: false
            },
            {
                name: 'Milotic', value:'Fêmea Lvl 43', inline: false
            },
            {
                name: 'Alakazam', value:'Macho Lvl 100', inline: false
            },
            {
                name: 'Gardevoir', value:'Femêa Lvl 100', inline: false
            },
            {
                name: 'Dragonite', value:'Macho Lvl 88', inline: false
            }
            
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Para ver sua PokeBag digite /poke_bag', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})
/*client.on("messageCreate", (message) => {
    if(message.author.bot) return
    if(message.content == "h1"){
        message.channel.send('hello')
    }else if(message.content == '/poke_cp'){
        const embed = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Bem vindo ao Centro Pokémon')
        .setDescription('Me de um momento para tratar seus pokemóns...')
        .setThumbnail('https://1.bp.blogspot.com/-DIcbaqxzeug/Ukch8xA5VQI/AAAAAAAAA30/yPMjIpTnQ7I/s640/470454-51_56.jpg')
        .addFields([
            {
                name: 'Todos seus pokémons foram curados', value:'Cuide bem deles!', inline: false
            }
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Espero não te ver aqui tão cedo '-'', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})*/

client.login('OTM4MTcxNzcwNTUxMzAwMTc2.YfmajA.nVKf0GNUCgTqqNuf8IfVGiGDVUI')