import inquirer from 'inquirer';
class App {
    static started = false;
    static async showMainMenu() {
        if (!this.started) {
            console.log('\n------ Welcome To The Employee Tracker! ------\n');
            this.started = true;
        }
        else {
            console.log('-------\n');
        }
        const menuChoiceObj = await inquirer.prompt({
            message: 'Please choose an option',
            name: 'choice',
            type: 'list',
            choices: ['Show Employees', 'Add Employee', 'Update Employee Salary', 'Exit']
        });
        switch (menuChoiceObj.choice) {
            case 'Show Employees':
                await this.showEmployees();
                this.showMainMenu();
                break;
            case 'Add Employee':
                await this.showAddEmployeeInterface();
                this.showMainMenu();
                break;
            case 'Update Employee Salary':
                await this.showUpdateSalaryInterface();
                this.showMainMenu();
                break;
            default:
                console.log('-----\nThanks for using the Employee Tracker!');
        }
    }
    static showEmployees() {
        console.log('show Employees');
    }
    static showAddEmployeeInterface() {
        console.log('Employee Interface');
    }
    static showUpdateSalaryInterface() {
        console.log('');
    }
}
export default App;
