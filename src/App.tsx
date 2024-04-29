import {
  Admin,
  EditGuesser,
  ListGuesser,
  Resource,
  ShowGuesser
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { CustomPostEdit, CustomPostList, CustomPostShow } from "./Post";
import { CustomCommentEdit, CustomCommentList, CustomCommentShow } from "./Comment";


export const CustomApp = () =>
  <Admin dataProvider={dataProvider} >
    <Resource name='users' list={ListGuesser} edit={EditGuesser} show={ShowGuesser} />
    <Resource name="posts" list={CustomPostList} show={CustomPostShow} edit={CustomPostEdit} />
    <Resource name="posts" list={CustomPostList} show={CustomPostShow} edit={CustomPostEdit} />

    <Resource name="comments" list={CustomCommentList} show={CustomCommentShow} edit={CustomCommentEdit} />
  </Admin>;
