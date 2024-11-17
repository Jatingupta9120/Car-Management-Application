import IsSortValue from '../../../utils/custom-class-validator/validator/is_sort_value';

/**
 * @IsSortValue custom validator
 * @description if client want data in some sorted order then client sent the name of the field and order
 * In our case client can send only name and age along with order ASC OR DESC
 * this validator check the client sent the data properly or not
 */
export class IsSortValueDTO {
    @IsSortValue(['name', 'age'])
    sortBY: SortEntity;
}

enum SORT_VALUE {
    ASCENDING = 'ASC',
    DESCENDING = 'DESC',
}
/**
 * SortBy value format type
 * Max of 3 value
 */
type SortEntity<TSort extends string = string> =
    | `${TSort}:${SORT_VALUE}`
    | `${TSort}:${SORT_VALUE},${TSort}:${SORT_VALUE}`
    | `${TSort}:${SORT_VALUE},${TSort}:${SORT_VALUE},${TSort}:${SORT_VALUE}`;
