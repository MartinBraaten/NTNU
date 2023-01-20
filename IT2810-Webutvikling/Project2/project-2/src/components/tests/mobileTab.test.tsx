import { render } from "@testing-library/react";
import MobileTab from "../atoms/mobileTab";

//tests that there are 3 buttons inside MobileTabs
test("MobileTab includes 3 buttons", () => {
    let stringArray: string[] = [];
    function mockFunction(stringArray: string[]) {}
    const { container } = render(
        <MobileTab
            issueState={stringArray}
            commitState={stringArray}
            memberState={stringArray}
            setMemberState={() => mockFunction(stringArray)}
            setIssueState={() => mockFunction(stringArray)}
            setCommitState={() => mockFunction(stringArray)}
        />
    );
    expect(container.querySelectorAll("button")).toHaveLength(3);
});
