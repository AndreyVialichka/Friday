import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperSort from "../../common/c10-SuperSort/SuperSort";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";
import SuperDebouncedInput from "../../common/c8-SuperDebouncedInput/SuperDebouncedInput";
import SuperPagination from "../../common/c9-SuperPagination/SuperPagination";


function Test() {
  return (
    <div className="Test">
      <SuperInputText />
      <SuperButton />
      <SuperCheckbox />
      <SuperEditableSpan />
      <SuperSelect />
      <SuperRadio />
      <SuperDebouncedInput />
      <SuperPagination 
        page={0} 
        itemsCountForPage={0}
        totalCount={0} 
        onChange={
          function (page: number, count: number): void {
            throw new Error("Function not implemented.");
          }
        } />
        <SuperSort 
          sort={""} 
          value={""} 
          onChange = {
              function (newSort: string): void {
                throw new Error("Function not implemented.");
            } 
          } />
    </div>
  );
}

export default Test;
