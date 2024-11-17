import { IsNotEmpty, IsString } from 'class-validator';
import RequiredIf from 'src/utils/custom-class-validator/validator/required_if';
/**
 * @RequiredIf custom validator check the value of type field with the value we passed in array and if the value is not matched then give error
 * we also pass other options as well in our example we pass isString so @RequiredIf  also validate the value is string or not
 */
export class RequiredIfDTo {
    @IsNotEmpty()
    @IsString()
    type: string;

    @RequiredIf(['type', 'PAN'], 'isString')
    validateType: string;
}
