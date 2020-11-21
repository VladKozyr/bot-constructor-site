import React, {useState} from 'react';
import {Row, Col, Layout, Button, Modal, Input} from 'antd';
import {CloseOutlined} from '@ant-design/icons';
import {BOTS} from "./bots";
import styles from "./my-bots.module.css";
import "./my-bots.css"
// import Icon from "antd/es/icon";
// import withRouter from "react-router/modules/withRouter";

const {Content, Header} = Layout;

function MyBots() {

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Layout>
                <Header>
                    <div
                        // className={styles.wonderfulHeader}
                        className="wonderful-header"
                    >Wonderful header
                    </div>
                </Header>
                <Content
                    // className={styles.container}
                    className="container"
                >
                    <Row gutter={[{xs: 20, sm: 30, md: 60, lg: 80}, 30]} align="middle">
                        <Col span={19}>
                            <span
                                // className={styles.myBotYourBotText}
                                className="my-bot-your-bot-text"
                            >Your bots</span>
                        </Col>
                        <Col span={5}>
                            <Button
                                // className="my-bot-create-new-button"
                                style={{
                                    background: "#4951EC",
                                    'border-radius': "15px",
                                    'font-family': "Poppins, sans-serif",
                                    'font-style': "normal",
                                    'font-weight': "normal",
                                    'font-size': "1.5vw",
                                    'line-height': "30px",
                                    padding: "20px 30px",
                                    display: "flex",
                                    'align-items': "center",
                                    'text-align': "center",
                                    color: "#FFFFFF"
                                }}
                                onClick={() => setVisible(true)}
                                // className={styles.myBotCreateNewButton}
                            >Create New</Button>
                            <Modal
                                title="New Bot"
                                visible={visible}
                                onOk={() => setVisible(false)}
                                onCancel={() => setVisible(false)}
                            >
                                <Input placeholder="Your bot's name"/>
                            </Modal>
                        </Col>
                    </Row>
                    <Row gutter={[{xs: 20, sm: 30, md: 60, lg: 80}, 30]}>
                        {botTemp}
                    </Row>
                </Content>
            </Layout>
        </div>
    );
}

const botTemp = BOTS.map((bot) => {
    return (
        <Col span={8}>
            <div
                // className={styles.botDiv}
                className="bot-div"
            >
                <Row
                    // className={styles.row80}
                    className="row-80"
                >
                    <Col offset={2} span={1}
                        // className={styles.col100}
                         className="col-100"
                    >
                        <div
                            // className={styles.rect}
                            className="rect"
                        />
                    </Col>
                    <Col offset={1} flex="auto"
                        // className={styles.myBotContent}
                         className="my-bot-content"
                    >
                        <Row
                            // className={styles.myBotContentRow}
                            // classname={styles.myBotContentName}
                            className="my-bot-content-row my-bot-content-name"
                        >
                            <Col span={15}
                                // className={styles.myBotContentNameText}
                                 className="my-bot-content-name-text"
                            >
                                {bot.name}
                            </Col>
                            <Col offset={6} span={1}>
                                <CloseOutlined
                                    // className={styles.myBotContentDeleteButtonIcon}
                                    className="my-bot-content-delete-button-icon"
                                />
                            </Col>
                        </Row>
                        <Row
                            // className={styles.myBotContentRow}
                            className="my-bot-content-row"
                            align="bottom">
                            <Button
                                // className={styles.myBotContentButtonEdit}
                                // className="my-bot-content-button-edit"
                                style={{
                                    width: "95%",
                                    height: "40%",
                                    background: "#EEEFF3",
                                    'box-shadow': "0px 2px 2px rgba(0, 0, 0, 0.25)",
                                    'border-radius': "8px"
                                }}
                            >
                                <span
                                    // className={styles.myBotContentButtonEditText}
                                    className="my-bot-content-button-edit-text"
                                >EDIT</span>
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </div>
        </Col>
    );
});

export default MyBots;