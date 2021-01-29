type RouteUrl = string;

export interface EntityRoute {
    readonly label: string;
    readonly url: RouteUrl;
}

export interface EntityRedirect {
    readonly redirect: boolean;
    readonly from: RouteUrl;
    readonly to: RouteUrl;
}
