import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import {useRouter} from "next/router";
const BlogThumb = ({data, type}) => {
    const router = useRouter();
  return (
    <div onClick={() => router.push(`/${type}/${data._id}`)}  className="px-4 blog-thumb ">
      <div>
        <Image src={data?.thumbnail} height="170px" width="300px" layout={'responsive'} />
      </div>
      <p className="blog-thumb-date mb-2">{dayjs(data?.created_at).format('MMMM D, YYYY')}</p>
      <div>
        <h5 className="blog-thumb-title">
            {data?.title}
        </h5>
        <p className="blog-thumb-description">
            {data?.excerpt}
        </p>
      </div>
    </div>
  );
};

export default BlogThumb;
