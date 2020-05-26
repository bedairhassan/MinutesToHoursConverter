import React, { useState, useEffect } from 'react'

function Parent() {

    const [totalMinutes, totalMinutesSet] = useState(-1)

    return (
        <React.Fragment>

            <center>
                <Input
                    onChange={totalMinutes => totalMinutesSet(totalMinutes)}
                    placeholder={`Insert minutes`} />

                {/* <String data={totalMinutes} header={`Total Minutes`}/> */}
                <String data={Math.floor(totalMinutes / 60)} header={`Hours`} />
                <String data={Math.floor((totalMinutes / 60 - parseInt(totalMinutes / 60)) * 60)} header={`Minutes`} />
            </center>


        </React.Fragment>
    )
}

const String = ({ data, header }) => <React.Fragment>
    <br /> {data} {header}
</React.Fragment>

const Input = ({ onChange, placeholder }) =>
    <input
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder} />

export default Parent
