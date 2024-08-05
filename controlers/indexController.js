const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
  ];

function addMessage(req, res) {
    messages.push({text: req.body.message, user: req.body.username, added: new Date()})
    res.redirect('/')
}

function getMessages(req, res) {
    res.render('index', {messages: [...messages].reverse()});
}

function getForm(req, res) {
    res.render('new');
}

module.exports = {addMessage, getMessages, getForm}