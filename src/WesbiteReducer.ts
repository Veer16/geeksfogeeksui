//As we are not storing multiple data type attribute so we are not
//creating an interface for the attribute
//In our case we have website details only which is string only

// Issue 1 - We have to declare an Interface seperately
interface IWebsiteAction {
  payload: string[];
  type: string;
}
export const WebsiteReducer = (
  state: string[],
  action: IWebsiteAction
): string[] => {
  // Issue 2 - we have to hardcode action types
  switch (action.type) {
    case "WebsiteStarted":
      return [];
    case "WebsiteCompleted":
      return [...action.payload];
  }
  // Issue 3 - We have to remeber to return the initial values
  return [];
};

//All the Issues were fixed using Redux Dev toolkit
