import { render, screen } from "@testing-library/react";
import CommentComponent from "./";

const mockComment = {
  id: 1,
  content:
    "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
  createdAt: "1 month ago",
  score: 12,
  user: {
    image: {
      png: "/images/avatars/image-amyrobson.png",
      webp: "/images/avatars/image-amyrobson.webp",
    },
    username: "amyrobson",
  },
  replies: [],
};

describe("Comment component", () => {
  it("renders the upvote icon", () => {
    render(<CommentComponent comment={mockComment} />);

    const upvoteIcon = screen.getByTitle("Upvote comment");

    expect(upvoteIcon).toBeInTheDocument();
  });

  it("renders the score", () => {
    render(<CommentComponent comment={mockComment} />);

    const score = screen.getByText(mockComment.score);

    expect(score).toBeInTheDocument();
    expect(score).toHaveTextContent(mockComment.score.toString());
  });

  it("renders the downvote icon", () => {
    render(<CommentComponent comment={mockComment} />);

    const downvoteIcon = screen.getByTitle("Downvote comment");

    expect(downvoteIcon).toBeInTheDocument();
  });

  it("renders the user avatar", () => {
    render(<CommentComponent comment={mockComment} />);

    const avatar = screen.getByAltText("Avatar for amyrobson");

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fimages%2Favatars%2Fimage-amyrobson.png&w=64&q=75"
    );
  });

  it("renders the username", () => {
    render(<CommentComponent comment={mockComment} />);

    const username = screen.getByText(mockComment.user.username);

    expect(username).toBeInTheDocument();
    expect(username).toHaveTextContent(mockComment.user.username);
  });

  it("renders the created date", () => {
    render(<CommentComponent comment={mockComment} />);

    const createdAt = screen.getByText(mockComment.createdAt);

    expect(createdAt).toBeInTheDocument();
    expect(createdAt).toHaveTextContent(mockComment.createdAt);
  });

  it("renders the content", () => {
    render(<CommentComponent comment={mockComment} />);

    const content = screen.getByText(mockComment.content);

    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent(mockComment.content);
  });
});
