import * as React from "react";
import { map } from "lodash";
import { v4 } from "uuid";
import menu, { MenuItem } from "../menu";

interface MenuItemIndexed extends MenuItem {
  id: string;
}

interface MenuItemBlockProps {
  menu: MenuItemIndexed[];
  showItems: string[];
  openHandler: (id: string) => void;
}

const MenuItemBlock: React.SFC<any> = ({ menu, openHandler, showItems }) => {
  return (
    <ul>
      {menu.map((item: MenuItemIndexed) => {
        return (
          <li key={item.id}>
            {item.title}
            {item.items ? (
              <button onClick={() => openHandler(item.id)}>></button>
            ) : (
              ""
            )}
            {item.items && showItems.includes(item.id) ? (
              <MenuItemBlock
                menu={item.items}
                openHandler={openHandler}
                showItems={showItems}
              />
            ) : (
              ""
            )}
          </li>
        );
      })}
    </ul>
  );
};

interface MenuProps {
  menu: MenuItem[];
}

interface MenuState {
  showItems: string[];
}

class Menu extends React.Component<MenuProps, MenuState> {
  private menu: MenuItemIndexed[];

  public constructor(props: MenuProps) {
    super(props);
    this.state = {
      showItems: []
    };

    this.menu = this.prepareMenu(this.props.menu);
  }

  private openHandler = (id: string): void => {
    if (!this.state.showItems.includes(id)) {
      this.setState({
        showItems: [...this.state.showItems, id]
      });
      console.log("add", id);
    } else {
      this.setState({
        showItems: this.state.showItems.filter((item: string) => item !== id)
      });
      console.log("del", id);
    }
  };

  private prepareMenu(menu): MenuItemIndexed[] {
    return menu.map(
      (item: MenuItem): MenuItemIndexed => {
        if (item.items) {
          return { id: v4(), ...item, items: this.prepareMenu(item.items) };
        }
        return { id: v4(), ...item };
      }
    );
  }

  public render() {
    return (
      <div>
        <MenuItemBlock
          menu={this.menu}
          openHandler={this.openHandler}
          showItems={this.state.showItems}
        />
      </div>
    );
  }
}

export default Menu;
