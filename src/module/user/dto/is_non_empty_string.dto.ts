import { IsStrongPassword } from 'class-validator';
import IsNonEmptyString from 'src/utils/custom-class-validator/validator/is_not_empty_string';
export class IsNonEmptyStringDto {
    /**
     * @IsNonEmptySTring custom validator decorator check the field is not empty and also validate a string contains only white spaces
     * @IsNonEmpty decorator check only the string is empty or not;
     */
    @IsNonEmptyString()
    //@IsNotEmpty()
    //@IsString()
    username: string;

    @IsNonEmptyString()
    @IsStrongPassword()
    password: string;
}
