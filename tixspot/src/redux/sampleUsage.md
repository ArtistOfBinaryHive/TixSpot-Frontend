## Setting the data

You need `dispatch` in order to set/update the data which is available in `react-redux`.

```javascript
// Import Statements
import { useDispatch } from 'react-redux'
// Type
import { AppDispatch } from '@/redux/store'


const dispatch = useDispatch<AppDispatch>()
```

In order to update a state stored in redux. we require the name of the setter function.
For updating the authentication status, we require `setUser`.

Below is a simple example that updates the user state

```javascript
const updateUser = () => {
    try {
        dispatch(setUser({
                isAuthenticated: true,
                userName: "check",
                userEmail: "check@gmail.com"
            }
        }))
} catch(error) {
    console.log(error)
}
}
```

## Getting the data

A state's data can be accessed using the `useSelector` hook available in `react-redux`.
The user's auth status can be accessed in the following way.

```javascript
const userData = useSelector(getUserData)
```

`getUserData` is a getter function that is defined in `authSlice.ts`
You could add more getters in the slice and add a new slice based on the requirements.

Please refer to [redux toolkit](https://redux-toolkit.js.org/introduction/getting-started) and [react-redux](https://react-redux.js.org/introduction/getting-started) for further clarifications

Also check out Redux devtools extensions available for both [firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/) and [chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).
