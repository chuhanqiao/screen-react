import React from "react";
import Layout from "@icedesign/layout";
import { Nav } from "@alifd/next";
import { Link, withRouter } from "react-router-dom";
import { menuConfig } from "@/config/menu";
import Logo from "../Logo";
import styles from "./index.module.scss";

const { Item, SubNav } = Nav;
function Header(props) {
  function getSelectKeys() {
    const selectKeys = props.location.pathname.split("/").filter(i => i);
    if (selectKeys.length === 0) {
      selectKeys.push("home");
    }
    return selectKeys;
  }

  function renderHeader() {
    const selectedKeys = getSelectKeys();

    return (
      <div className={styles.adminLayoutHeader}>
        <Logo />
        {menuConfig && menuConfig.length > 0 ? (
          <Nav direction="hoz" type="secondary" selectedKeys={selectedKeys}>
            {menuConfig.map(nav => {
              return (
                <SubNav label={nav.name} key={nav.id}>
                  <ul className={styles.menuWrapper}>
                    {nav.children.map(children => {
                      return (
                        <li key={children.id} className={styles.menuItem}>
                          {children.path ? (
                            <Link to={children.path}>{children.name}</Link>
                          ) : (
                            children.name
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </SubNav>
              );
            })}
          </Nav>
        ) : null}
      </div>
    );
  }

  return <Layout.Header type="secondary">{renderHeader()}</Layout.Header>;
}

export default withRouter(Header);
