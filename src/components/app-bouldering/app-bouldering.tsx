import { Component,State } from '@stencil/core';
import railsApi, { BoulderingGrade } from '../../helpers/api'


@Component({
    tag: 'app-bouldering',
    styleUrl: 'app-bouldering.css'
})
export class AppBouldering {
    
    @State() boulderingGrades: BoulderingGrade[];

    async componentWillLoad() {
        return railsApi.bouldering().then(grades => this.boulderingGrades = grades)
    }

    render() {
        return (
            <ion-page>
                <ion-list>
                    <ion-item>
                        <ion-label>Popover</ion-label>
                        <ion-select id="customPopoverSelect" interface="popover" placeholder="Select One">
                            {this.boulderingGrades.map(grade => (
                                <ion-select-option>{grade.string_value}</ion-select-option>
                            ))}
                        </ion-select>
                    </ion-item>
                </ion-list>
            </ion-page>
        );
    }
}
