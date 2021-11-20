import React from 'react';

const SitebarCollpase = ({ label, children, activeCount, collapseKey }) => {
    return (
        <>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target={`#collapseOne${collapseKey}`}>
                        {label}
                        {activeCount && <div className="number">{activeCount}</div>}
                    </button>
                </h2>
                <div id={`collapseOne${collapseKey}`} className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    {children}
                </div>
            </div>
        </>
    );
};

export default SitebarCollpase;