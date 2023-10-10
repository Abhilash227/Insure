import React, { Component } from 'react';
import './PageWithSections.css'

class PageWithSections extends Component {
    constructor() {
        super();
        this.state = {
            activeSection: 'overview',
        };
    }

    showSection = (section) => {
        this.setState({ activeSection: section });
    };

    render() {
        const { activeSection } = this.state;
        return (
            <div>
                <div className="text-links">
                    <span className={activeSection === 'overview' ? 'active' : ''} onClick={() => this.showSection('overview')}>Overview</span>
                    <span className={activeSection === 'benefits' ? 'active' : ''} onClick={() => this.showSection('benefits')}>Benefits</span>
                    <span className={activeSection === 'faq' ? 'active' : ''} onClick={() => this.showSection('faq')}>FAQ</span>
                </div>
                <div className="card">
                    {activeSection === 'overview' && (
                        <div className="content overview">
                            What is HEALTH INSURANCE? <br /><br />
                            1. Maintaining a healthy lifestyle is very important to cope with new emerging diseases. Having said that even if you are currently fit and do not need any medical help, it’s important to have a health insurance coverage that secures your future medical needs.<br /><br />

                            2. Health Insurance comes under the umbrella of General Insurance that can be your perfect mate in times of dealing with sudden medical emergencies. When you or your immediate family member need hospitalisation due to illness or accidental injury having a health insurance policy in place can help you with cashless treatments or hassle-free reimbursement facilities.<br /><br />

                            3.So, what are you waiting for? Looking at the current healthcare situations in India, we are sure you won't regret your decision of buying health insurance that secures your and yours family’s future medical needs!
                        </div>
                    )}
                    {activeSection === 'benefits' && (
                        <div className="content benefits">

                            Some key benefits of our health plans are:<br /><br />

                            1. Cashless Transactions
                            Our health plans offer cashless health insurance that helps you to avail of treatment facilities at a wide range of network hospitals overall in India.<br /><br />

                            2. Pre-and Post-Hospitalisation Expenses
                            Our health plans provide the cost incurred for treatment for both before and after hospitalisation.

                            3. Medical Check-Ups
                            Our health policies also cover routine or periodic health examinations, with leading insurance providers offering free medical check-ups to the policyholders.<br /><br />

                            4. Transportation Expenses
                            Our health policies cover the transportation cost for commuting the insured person to the hospital.<br /><br />

                            5. Tax Saving Benefit
                            With our health plans, you can reap tax benefits by paying premiums towards health insurance plans, as per Section 80D of the Income Tax Act.

                        </div>

                    )}

                    {activeSection === 'faq' && (
                        <div className="content faq">
                            1. What is a waiting period?<br />
                            The amount of time you need to wait before you can start using any benefits of your health insurance policy.<br /><br />


                            2. What is a cumulative bonus?<br />
                            When you don’t make any health insurance claims during the year, your insurer will increase your sum insured without charging you any extra premium for it. This increase in your sum insured is called a cumulative bonus.<br /><br />

                            3. What are deductibles?<br />
                            A deductible is an amount that is a part of the treatment cost that you are expected to pay by yourself, while the rest is paid by the insurer.<br /><br />

                            4. What is a co-payment clause?<br />
                            In the case of a co-payment clause, the medical treatment cost is split between you and the insurer by a certain percentage.<br /><br />

                            5. Can I get admitted to a non-network hospital?<br />
                            Yes, you can. However, in this case- you'll have to claim for Reimbursement as Cashless Claims are available at our network hospitals only.<br /><br />

                            6. What is included in a Maternity Health insurance?<br />
                            A maternity insurance covers the delivery expenses- be it normal or caesarean. It also covers post-birth care, vaccinations, and medicines.<br /><br />

                            7. Do I have to pay GST on the health insurance premium?<br />
                            Yes, a GST is charged on the health insurance premiums payable by you.<br /><br />

                            8. How many people can you buy a group health insurance policy for?<br />
                            It varies from insurer to insurer. You can buy a group health insurance policy for a minimum of 10 people.<br /><br />

                            9. Can I still claim if hospitalization is less than 24-hours?<br />
                            Yes, you can if it is a day-care procedure or an OPD – if you’ve opted for an OPD cover in your health insurance.<br /><br />
                            10. What should I do if I have a pre-existing health condition and want to buy health insurance?<br />

                            If you have any Pre-existing diseases it must be declared before purchasing the policy so that there is no issue with claims.<br /><br />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
export default PageWithSections;

