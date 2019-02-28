# Sample State


```
state = {
    users: {
        0: {
            id: 0,
            name: 'Full Name',
            username: 'user0',
            email: 'user0@email.com',
            url: 'image/profile.com'
            },
        1: {
            id: 1,
            name: 'Full Name',
            username: 'user1',
            email: 'user1@email.com',
            url: 'image/profile.com'
            }
        },
    selectedUser: '',
    pins: {
        0: {
            id: 0,
            url: '',
            caption: ''
            },
        1: {
            id: 1,
            url: '',
            caption: '',
            comments: [ids ]
            }
        },
    selectedPin: '',
    userInput: '',
    boards: {
        0: {
            id: 0,
            pin_id: 0,
            user_id: 0,
            caption: ''
            },   
        1: {
            id: 1,
            pin_id: 1,
            user_id: 1,
            caption: ''
            }   
        },
    selectedBoard: '',
    tags: {
        0: {
            id: 0,
            pin_id: 0,
            tag: ''
            }
        1: {
            id: 1,
            pin_id: 1,
            tag: ''
            }
        },
    comments: {
        0: {
            id: 0,
            pin: '',
            reply: false,
            body: ''
            }
        1: {
            id: 1,
            pin: '',
            reply: false,
            body: ''
            }
        },
    likes: {
        0: {
            pin: '',
            likes: 0 
            }
        1: {
            pin: '',
            likes: 0 
            }
        }
 }
```