import React, { memo } from 'react'

//export const Small = React.memo(({value}) => {
export const Small = memo(({value}) => {
    console.log('Call again :C');
    return (
        <small>
            { value }
        </small>
    )
}
)