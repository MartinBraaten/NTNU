import { fireEvent, render } from "@testing-library/react";
import MemberSortOrder from "../atoms/memberSortOrder";
import { memberInfo } from "../molecules/memberWindow";

//tests that MemberSortOrder onClick changes visibility of the drop down menu
test("On click changes MemberSortOrder dropdown menu visibility", () => {
    let membersProp: memberInfo[] = [];
    function mockFunction(membersProp: memberInfo[]) {}

    const { container } = render(
        <MemberSortOrder
            members={membersProp}
            filteredMembers={membersProp}
            setMembers={mockFunction}
            setFilteredMembers={mockFunction}
        />
    );
    const div1 = container
        .querySelector("#sortAlternatives")
        ?.getAttribute("style");
    expect(div1).toMatch("display: none;");

    const innerBox = container.querySelector("#innerBox");
    if (innerBox) {
        fireEvent.click(innerBox);
    }
    const div2 = container
        .querySelector("#sortAlternatives")
        ?.getAttribute("style");

    expect(div2).toMatch("display: block;");
});
