import React from 'react';
import { ButtonLoginProvider } from './ButtonLoginProvider';
import { Url } from 'url';

interface Props {
    logo: string;
    name: string;
}

const ProviderCard = (props: Props) => {
    return (
        <div className="border-slate-400 border-solid border-2 rounded-lg w-[226px] bg-slate-400 p-4">
            <div className="h-[80px] mb-2 justify-items-center ">
                <img id="provider-logo" src={props.logo} className="max-h-full" />
            </div>

            {/* <div id="provider-name">{props.name}</div> */}

            <form action="submit" className="flex flex-col justify-between h-[170px]">
                <div className="flex flex-col ">
                    <label htmlFor="user-id">user-id</label>
                    <input id="user-id" type="text" className="rounded" />
                </div>
                <div className="flex flex-col rounded-xl">
                    <label htmlFor="secret">secret</label>
                    <input id="secret" type="text" className="rounded" />
                </div>
                <div className="mt-2">
                    <ButtonLoginProvider />
                </div>
            </form>
        </div>
    );
};

export default ProviderCard;
