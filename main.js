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
    }else if(message.content == 'xau.favoritepoke!'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('PokeDex')
        .setDescription('Pokémon Favorito')
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
    }else if(message.content == 'davi.saudade'){
        const embed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle('#notaodavikk')
        .setDescription('Muié favorita')
        .setImage(message.author.displayAvatarURL({dynamic: true, sizeL: 2048, format: 'jpg'}))
        .setThumbnail('https://instagram.fcgh17-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/272917641_113961227859861_655921300838507727_n.jpg?_nc_ht=instagram.fcgh17-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=L6Y_3WEJKJ4AX8ZyKzZ&tn=kvXSyW053Y7vvh1P&edm=ALQROFkBAAAA&ccb=7-4&ig_cache_key=Mjc2MjA5NDExMjIzMTE1NjA4OQ%3D%3D.2-ccb7-4&oh=00_AT-DdT6cWYhDBCi-Z1SkBPZwZM9d6q4qxRaxT2ow8_XA0w&oe=6202DA9C&_nc_sid=30a2ef')
        .addFields([
            {
                name: 'Pokémon', value:'Kakiuchi', inline: false
            },
            {
                name: 'Tipo:', value:'Ruiva e baixinha', inline: false
            },
            {
                name: 'SEXTOU COM S DE', value:'S A U D A D E', inline: false
            }
        ])
        .setAuthor('carlos.com' , message.author.displayAvatarURL(), message.author.displayAvatarURL())
        .setFooter('Paixão do davi!!!', message.author.displayAvatarURL())

        message.reply({embeds: [embed]})
    }
})

client.login('token')
