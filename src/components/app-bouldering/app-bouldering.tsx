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
            this.boulderingGrades.map(grade => (
                <ion-button>{grade.string_value}</ion-button>
            ))
        );
    }
}
