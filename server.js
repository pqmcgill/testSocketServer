const app = require('http').createServer();
const WebSocketServer = require('ws').Server;
const wss = new WebSocketServer({ server: app });

var count = 0;

app.listen(4003, () => {
	console.log('server listening on port 4003');
});

wss.on('connection', ws => {
	console.log('connected!');
	setInterval(() => {
    console.log('sending data');
    ws.send(JSON.stringify(
      
      
      {
        type: 'internalNotification',
        data: {
          id: `${count}`,
          recipient: '3644bfa9-5d4e-45aa-9ca8-04199de838d1',
          description: 'shh, super secret message',
          viewed: false,
          linkableObject: {
            typeKey: 'designReview',
            contextId: '7a65022d-72cb-4c3c-a6ef-aec296656011'
          },
          contextObject: {
            tab: 'history',
            designReviewType: 'userNeedReview'
          },
          creationDate: Date.now()
        }
      }
    
    
    ));
    count+=1;
	}, 5000);
});
