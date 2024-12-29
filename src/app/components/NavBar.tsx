import React from 'react';

export const NavBar = () => {
    return (
        <div id="navbar" className="bg-slate-400 flex justify-between h-16 content-center">
            <div id="logo" className="min-w-10 p-2">
                LOGO
            </div>
            <div id="session-info" className="flex mr-2">
                <div id="service-provider" className="min-w-10 p-2">
                    CURRENT PROVIDER
                </div>
                <div className="min-w-10 p-2">CURRENT USER</div>
            </div>
        </div>
    );
};
