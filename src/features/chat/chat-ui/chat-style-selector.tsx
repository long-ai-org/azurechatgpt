import { Tabs, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Brush, CircleDot, Scale } from "lucide-react";
import { FC } from "react";
import { ConversationStyle } from "../chat-services/models";

interface Prop {
  disable: boolean;
  conversationStyle: ConversationStyle;
  onChatStyleChange?: (value: ConversationStyle) => void;
}

export const ChatStyleSelector: FC<Prop> = (props) => {
  return (
    <Tabs
      defaultValue={props.conversationStyle}
      onValueChange={(value) =>
        props.onChatStyleChange
          ? props.onChatStyleChange(value as ConversationStyle)
          : null
      }
    >
      <TabsList className="grid w-full grid-cols-3 h-12 items-stretch">
        <TabsTrigger
          value="creative"
          className="flex gap-2"
          disabled={props.disable}
        >
          <Brush size={20} /> Creative
        </TabsTrigger>
        <TabsTrigger
          value="balanced"
          className="flex gap-2"
          disabled={props.disable}
        >
          <Scale size={20} /> Balanced
        </TabsTrigger>
        <TabsTrigger
          value="precise"
          className="flex gap-2"
          disabled={props.disable}
        >
          <CircleDot size={20} /> Precise
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};
