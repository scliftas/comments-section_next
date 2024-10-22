import type { FC } from "react";
import type { Comment } from "@/types";
import Image from "next/image";
import MinusIcon from "@/components/atoms/MinusIcon";
import PlusIcon from "@/components/atoms/PlusIcon";

type Props = {
  comment: Comment;
};

const CommentComponent: FC<Props> = (props) => {
  const { comment } = props;

  return (
    <div className="bg-white p-6 rounded-md flex flex-col-reverse md:flex-row gap-4 w-full">
      <div className="bg-veryLightGray rounded-md flex flex-row md:flex-col w-24 md:w-12 h-auto md:h-32 p-4 align-middle items-center justify-between">
        <PlusIcon className="fill-lightGrayishBlue" title="Upvote comment" />

        <b className="text-moderateBlue">{comment.score}</b>

        <MinusIcon className="fill-lightGrayishBlue" title="Downvote comment" />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex gap-4">
            <Image
              width="32"
              height="32"
              src={comment.user.image.png}
              alt={`Avatar for ${comment.user.username}`}
            />

            <b className="text-darkBlue">{comment.user.username}</b>
          </div>

          <p className="text-grayishBlue">{comment.createdAt}</p>
        </div>

        <p className="text-grayishBlue">{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentComponent;
